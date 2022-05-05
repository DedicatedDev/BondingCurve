import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from "react-router-dom";
//import { Minter } from "./pages/CeltMinter";
import { Home } from "./pages/home/Home";
import { MoralisProvider } from "react-moralis";
import { useSnackbar } from "notistack";

import * as setting from "./config";
import { styled, Typography, useTheme } from "@mui/material";
import { keyframes } from "@mui/system";

function App() {
  const HeaderContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    maxHeight: "44px",
    width: "100%",
    padding: "24px 20px 16px 0",
    justifyContent: "center",
    alignItems: "center",
  }));

  const blink = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

  const RouteLink = styled(NavLink)(({ theme }) => ({
    textDecoration: "none",
    color: theme.palette.primary.main,

    "&:active": {
      color: "red",
    },
    fontSize: theme.typography.nav.fontSize,
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  }));
  const tm = useTheme();
  return (
    <Router>
      <HeaderContainer>
        <RouteLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? tm.palette.primary.dark : tm.palette.primary.main,
            paddingRight: "20px",
          })}
        >
          Bonding Curve
        </RouteLink>
      </HeaderContainer>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
