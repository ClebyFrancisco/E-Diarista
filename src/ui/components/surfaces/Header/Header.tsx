import React from "react";
import { Container, Toolbar } from "@mui/material";
import { HeaderAppBar, HeaderLogo } from "./Header.style";

const Header: React.FC = () => {
  return (
    <HeaderAppBar position={"sticky"}>
      <Toolbar component={Container}>
        <HeaderLogo src={"/img/logos/logo.svg"} alt={"E-diarista"} />
      </Toolbar>
    </HeaderAppBar>
  );
};
export default Header;
