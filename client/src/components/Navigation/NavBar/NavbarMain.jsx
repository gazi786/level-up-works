import { AppBar, Container } from "@mui/material";
import React from "react";
import NavigationPaged from "./NavigationPaged";

const Navbar = ({ handleModalOpen, accessType }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#43C0F6" }}>
      <Container maxWidth="lg">
        <NavigationPaged
          handleModalOpen={(type) => handleModalOpen(type)}
          accessType={accessType}
        />
      </Container>
    </AppBar>
  );
};

export default Navbar;
