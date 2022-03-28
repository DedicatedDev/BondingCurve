# This script is based on https://gitlab.com/mintroad/tech/celts/-/snippets/2225274
import os
import sys
#Install Automation Tools
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

import time
from dotenv import load_dotenv, find_dotenv
from pyvirtualdisplay import Display
from argparse import ArgumentParser

#config CLI args 
parser = ArgumentParser()
parser.add_argument('--nft_ids', metavar='N', type=str, nargs='+',
                    help='nft ids for listing')
parser.add_argument('--price', metavar ='Price', type=int, help='Listing Price')
args = parser.parse_args()
nft_ids = args.nft_ids
price = args.price

# display = Display(visible=0, size=(800, 600))
# display.start()
print("started screen")
config = load_dotenv(find_dotenv())

# The first time you do this, you'll need to connect your metamask wallet
# Leave the browser open with only one tab
print("Get Started chrom extension")
op = Options()
op.add_argument('--no-sandbox')
op.add_argument("--disable-dev-shm-usage")
op.add_extension('metamask.crx') # <-- route to the CRX file
#Ubuntu
#chrome = webdriver.Chrome(executable_path='/usr/bin/chromedriver', chrome_options=op)
#Mac OS
chrome = webdriver.Chrome(chrome_options=op)

time.sleep(3.0)

#Define Consts
chain = os.getenv("CHAIN") # Change for other chains, but if you're using other chains just use the API instead
collection_address = os.getenv("COLLECTION_ADDRESS") # Pull this from the URL of your collection # must be a string
secret_recovery_phrase = os.getenv("SECRET_RECOVER_PHRASE")
password = os.getenv("PASSWORD")
nft_source_url = os.getenv("NFT_SOURCE_ASSET_URL")
nft_account_url = os.getenv("NFT_SOURCE_ACCOUNT_URL")

##listing 
def list(i):
        # Main window
        #chrome.switch_to.window(chrome.window_handles[0])
        # Go to sale page
        path = "{}/{}/{}/sell".format(nft_source_url,collection_address,nft_ids[i])
        chrome.get(path)
        time.sleep(5.0)
        try:
            chrome.find_element(By.XPATH, '//a[text()="Sell"]').click()
        except NoSuchElementException:
            print("None exist that button")    
        # Set price
        time.sleep(2.0)  
        try:      
            chrome.find_element(By.XPATH, '//input[@name="price"]').send_keys(price + Keys.RETURN)
            time.sleep(0.5)
        except:
            print("Not find items")
            
        time.sleep(15.0)        
        chrome.switch_to.window(chrome.window_handles[2])
        chrome.find_element(By.XPATH, '//button[text()="Sign"]').click()
        
        # Switch to new window
        time.sleep(5.0)
        chrome.switch_to.window(chrome.window_handles[0])
        
## recover account. 
def connect_wallet():
    try: 
        #change Windows
        chrome.switch_to.window(chrome.window_handles[0])
        chrome.find_element_by_xpath('//button[text()="Get Started"]').click()
        chrome.find_element_by_xpath('//button[text()="Import wallet"]').click()
        chrome.find_element_by_xpath('//button[text()="No Thanks"]').click()
        
        time.sleep(0.5)
        #fillout recover params
        chrome.find_element(By.XPATH, '//input[@placeholder="Paste Secret Recovery Phrase from clipboard"]').send_keys(secret_recovery_phrase + Keys.RETURN)
        chrome.find_element_by_id("password").send_keys(password + Keys.RETURN)
        chrome.find_element_by_id("confirm-password").send_keys(password + Keys.RETURN)        
        chrome.find_element_by_xpath("//span[text()='I have read and agree to the ']").click()
        time.sleep(0.1)
        chrome.find_element_by_xpath('//button[text()="Import"]').click()
        time.sleep(5.0)
        chrome.find_element_by_xpath('//button[text()="All Done"]').click()
        chrome.find_element_by_xpath('//button[@title="Close"]').click() 
        chrome.find_element_by_xpath("//span[text()='Ethereum Mainnet']").click()
        chrome.find_element_by_link_text("Show/hide").click()

        settingTestNetEnableItem = chrome.find_elements_by_xpath("//div[@data-testid='advanced-setting-show-testnet-conversion']")[1]
        time.sleep(0.1)
        inputItem = settingTestNetEnableItem.find_element_by_xpath(".//input[@type='checkbox']")
        inputItem.find_element_by_xpath('..').click()
        
        #change network
        chrome.find_element_by_xpath("//span[text()='Ethereum Mainnet']").click()
        time.sleep(0.2)
        chrome.find_element_by_xpath("//span[text()='Rinkeby Test Network']").find_element_by_xpath('./../../..').click()
        time.sleep(1.0)
        chrome.get(nft_account_url)
        time.sleep(3.0)
        chrome.find_element_by_xpath("//span[text()='MetaMask']").find_element_by_xpath('./../../..').click()
        #time.sleep(1.0)
        #chrome.switch_to.window(chrome.window_handles[1])
        time.sleep(3.0)
        chrome.switch_to.window(chrome.window_handles[2])
        chrome.find_element(By.XPATH, '//button[text()="Next"]').click()
        chrome.find_element(By.XPATH, '//button[text()="Connect"]').click()
        chrome.switch_to.window(chrome.window_handles[0])

        chrome.execute_script("window.scrollTo(0,document.body.scrollHeight)")
        time.sleep(3.0)
        
        for i in range(0, len(nft_ids)):
            list(i)
        print("Ended listing")
    except:
        print(RuntimeError.message)
        time.sleep(0.5)

##listing 
def cancel_list(i):
        # Main window
        #chrome.switch_to.window(chrome.window_handles[0])
        # Go to sale page
        chrome.get('{}/assets/{}/{}/sell'.format(nft_source_url,collection_address, nft_ids[i], i))
        time.sleep(2.0)
        chrome.find_element_by_xpath("//button[contains,'Cancel ']").click()       

        time.sleep(15.0)        
        chrome.switch_to.window(chrome.window_handles[2])
        chrome.find_element(By.XPATH, '//button[text()="Sign"]').click()
        
        # Switch to new window
        time.sleep(5.0)
        chrome.switch_to.window(chrome.window_handles[0])
        display.stop()
connect_wallet()

