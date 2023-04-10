import React from "react";
import { Box, Toolbar, styled, Link } from "@mui/material";
import LangElm from "./NavBarElements/LangElm";
import LogoElm from "./NavBarElements/LogoElm";
import LoginElm from "./NavBarElements/LoginElm";
import MobileMenu from "./NavBarElements/MobileMenu";

const pages = ["Home", "Features", "Teachers"];

const renderSwitch = (pages) => {
  switch (pages) {
    case "Home":
      return "/";
    case "Features":
      return "/features";
    case "Teachers":
      return "/teachers";
    default:
      return "/";
  }
};

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#43C0F6",
  fontFamily: "Open Sans, sans-serif",
  fontSize: "1rem",
  textTransform: "uppercase",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.75rem",
    fontWeight: "500",
  },
}));

const MenuBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "1rem",
  marginTop: "2rem",
  marginBottom: "0.65rem",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const LoginPanel = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  gap: "0.5rem",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const NavigationPaged = ({ handleModalOpen, accessType }) => {
  return (
    <StyledToolbar>
      <LogoElm />
      <MenuBox>
        {pages.map((page) => (
          <Box key={page} sx={{ mx: 2 }}>
            <Link
              href={renderSwitch(page)}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                textDecoration: "none",
                fontSize: { xs: "0.65", md: "1rem" },
                fontWeight: "bold",
                "&:hover": {
                  color: "#707070",
                },
              }}
            >
              {page}
            </Link>
          </Box>
        ))}
      </MenuBox>
      <LoginPanel>
        <LangElm />
        <LoginElm
          handleModalOpen={(type) => handleModalOpen(type)}
          accessType={accessType}
        />
      </LoginPanel>
      {/* Mobile Menu */}
      <MobileMenu
        pages={pages}
        renderSwitch={renderSwitch}
        handleModalOpen={(type) => handleModalOpen(type)}
        accessType={accessType}
      />
      {/* Mobile Menu End */}
    </StyledToolbar>
  );
};

export default NavigationPaged;
