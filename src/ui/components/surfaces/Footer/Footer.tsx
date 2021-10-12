import React from "react";
import { Typography, Box } from "@mui/material";

import {
  AppList,
  FooterContainer,
  FooterStyled,
  FooterTitle,
} from "./Footer.style";

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth:'400px '}}>
          <FooterTitle>Quem Somos</FooterTitle>

          <Typography variant={'body2'} sx={{ mt: 2}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            voluptatum recusandae iusto quasi voluptatem fuga. Veritatis quis
            dolorem impedit dolorum ipsam minima, unde similique distinctio quo
            ex culpa! Expedita, molestiae.
          </Typography>
        </Box>
        <div>
          <FooterTitle>Baixe Nossos Aplicativos</FooterTitle>
          <AppList>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img src={"/img/logos/app-store.png"} alt={"App Store"} />
              </a>
            </li>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img src={"/img/logos/google-play.png"} alt={"Google Play"} />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};
export default Footer;
