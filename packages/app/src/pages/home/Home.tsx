import { Box, styled, Typography, Slide, keyframes, TextField, Button } from "@mui/material";
import HeroLogoImg from "../../assets/image/home/heroLogo.png";
import BgImag from "../../assets/image/home/background.svg";
import BgImagTm from "../../assets/image/home/background_tm.svg";
import Arrow from "../../assets/image/home/arrow.svg";
import { LocalizedTexts } from "../../assets/localization/localization";
import { useTranslation } from "react-i18next";

import { useBreakPoint } from "../../utils/MediaQuery";
import { useEffect, useRef, useState } from "react";
import Web3Modal from "web3modal";
import { BigNumber, ethers } from "ethers";
import { CurveABI, Settings, BondingCurve, DaiABI, MockDAI, BzzABI, Bzz } from "@swarm/contracts-typechain";
import { InputFieldType } from "../../interfaces/home/InputType";
import { BzzWeb3Service } from "../../services/Web3Service";
import { CurveBoard } from "../../components/CurveBoard";
import { Utils } from "../../utils/Utils";

export const Home = () => {
  const match = useBreakPoint();
  const [show, setShow] = useState(false);
  const [graphData, setGraphData] = useState<any[]>([]);
  const web3Service = new BzzWeb3Service();
  useEffect(() => {
    const init = async () => {
      await web3Service.connectWallet();
      const _totalBzzSupply = await web3Service.getBZZTotalSupply();
      updateFormInput((pre) => ({ ...pre, totalBzzSupply: _totalBzzSupply.toString() }));
    };
    init();
  }, []);

  const calc = async () => {
    await web3Service.connectWallet();
    const outputBzz = await web3Service.getBzz(BigNumber.from(formInput.daiSupply));
    const outputDAI = await web3Service.redeemBZZ(BigNumber.from(formInput.redeemBZZ));
    console.log(outputBzz, outputDAI);
    updateFormInput((pre) => ({ ...pre, outputBZZ: +outputBzz.toString(), outputDAI: +outputDAI.toString() }));

    let data = [];
    for (let dai = 10; dai < 8000; dai += 1000) {
      const outputBzz = await web3Service.getBzz(BigNumber.from(dai));
      const outputDAI = await web3Service.redeemBZZ(BigNumber.from(dai));
      const chat_data = {
        name: `${dai.toString()}`,
        bzz: outputBzz.toNumber(),
        dai: outputDAI.toNumber(),
      };
      data.push(chat_data);
    }
    setGraphData(data);
    console.log(data);
  };

  const burnToken = async () => {
    try {
      await web3Service.connectWallet();
      await web3Service.burnBZZToken(ethers.utils.parseEther(formInput.bzzAmountForBurn.toString()));
      const _totalBzzSupply = await web3Service.getBZZTotalSupply();
      updateFormInput((pre) => ({ ...pre, totalBzzSupply: _totalBzzSupply.toString() }));
    } catch (error) {
      Utils.handlingError(error);
    }
  };

  const [formInput, updateFormInput] = useState({
    daiSupply: 0,
    redeemBZZ: 0,
    outputBZZ: 0,
    outputDAI: 0,
    bzzAmountForBurn: 0,
    totalBzzSupply: "0",
  });
  const handleChange = (type: InputFieldType, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let inputValue: number = Number(event.target.value);
    if (!inputValue) {
      inputValue = 0;
    }
    switch (type) {
      case InputFieldType.BZZ:
        updateFormInput((pre) => ({ ...pre, redeemBZZ: inputValue }));
        break;
      case InputFieldType.BurnBZZ:
        updateFormInput((pre) => ({ ...pre, bzzAmountForBurn: inputValue }));
        break;

      default:
        updateFormInput((pre) => ({ ...pre, daiSupply: inputValue }));
        break;
    }
  };

  const CalcBtn = styled(Button)(({ theme }) => ({
    height: "52px",
    borderRadius: "2px",
    padding: "16px 24px 16px 24px",
    backgroundColor: theme.palette.primary.dark,
    color: "white",
    margin: "24px",
    "&:hover": {
      color: "red",
    },
  }));

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" p={3}>
      <Box
        sx={{
          border: "solid 1px",
          borderColor: (theme) => theme.palette.primary.dark,
          borderRadius: "8px",
          display: "flex",
          flexDirection: !match ? "column" : "row",
        }}
        p={3}
        justifyContent="space-around"
        alignItems="center"
      >
        <Box>
          <Box display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center">
            <TextField
              id="home-deposit"
              label="Deposit DAI"
              inputProps={{ min: "0" }}
              value={formInput.daiSupply}
              sx={{
                input: { color: "black" },
              }}
              onChange={(e) => handleChange(InputFieldType.DAI, e)}
            ></TextField>
            <Typography id="home-output" p={3} color="green">
              OutPut BZZ
            </Typography>
            <Typography id="home-output" color="red">
              {formInput.outputBZZ.toString()}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" mt={2}>
            <TextField
              id="home-token-supply"
              label="Redeem BZZ"
              inputProps={{ min: "0" }}
              value={formInput.redeemBZZ}
              sx={{
                input: { color: "black" },
              }}
              onChange={(e) => handleChange(InputFieldType.BZZ, e)}
            ></TextField>
            <Typography id="home-output" p={3} color="green">
              OutPut DAI
            </Typography>
            <Typography id="home-output" color="red">
              {formInput.outputDAI.toString()}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" mt={2}>
            <TextField
              id="home-burn-supply"
              label="Burn Bzz"
              inputProps={{ min: "0" }}
              value={formInput.bzzAmountForBurn}
              sx={{
                input: { color: "black" },
              }}
              onChange={(e) => handleChange(InputFieldType.BurnBZZ, e)}
            ></TextField>
            <Typography color="black" ml={2}>Unit(ETH)</Typography>
            <CalcBtn onClick={burnToken}>Burn</CalcBtn>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" mt={2}>
            <Typography color="green">Total Bzz Supply</Typography>
            <Typography color="red" ml={14}>
              {formInput.totalBzzSupply}
            </Typography>
          </Box>
        </Box>
        <Box m={5}>
          <CurveBoard graphData={graphData}></CurveBoard>
        </Box>
      </Box>

      <Box mt={5} display="flex" flexDirection="column" justifyContent="center">
        <CalcBtn onClick={calc}>Prediction</CalcBtn>
      </Box>
    </Box>
  );
};
