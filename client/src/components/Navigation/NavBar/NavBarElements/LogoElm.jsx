import { Box, styled, Link } from "@mui/material";
import React from "react";
import LevelUpWorksWhite from "../../../../assets/NavBar/LevelUpWorksWhite.png";

const Logo = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "2rem",
  height: "auto",
  width: "11rem",
  objectFit: "cover",
  "& Link": {
    textDecoration: "none",
  },
  [theme.breakpoints.down("sm")]: {
    width: "auto",
    height: "auto",
    flexGrow: 2,
  },
}));

const LogoImage = styled("img")({
  width: "100%",
  maxWidth: "11rem",
  height: "auto",
  objectFit: "contain",
});

const LogoElm = () => {
  return (
    <Logo>
      <Link href="/">
        <LogoImage src={LevelUpWorksWhite} alt="Level Up Works Logo" />
      </Link>
    </Logo>
  );
};

export default LogoElm;
