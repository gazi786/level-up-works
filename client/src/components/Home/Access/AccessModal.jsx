import {
  Backdrop,
  Box,
  CardMedia,
  Container,
  Divider,
  Fade,
  Grid,
  Modal as MuiModal,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import CloseImage from "../../../assets/LoginSignup/esc.png";
import StudentsImage from "../../../assets/LoginSignup/students.png";
import TeachersImage from "../../../assets/LoginSignup/teachers.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  maxHeight: "96%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #FFFFFF",
  boxShadow: "#00000029 0px 5px 15px",
  p: 4,
  overflow: "auto",
};
const AccessModal = ({ openModal, handleModalClose, accessType }) => {
  const [activeLink, setActiveLink] = useState(accessType);

  const handleClick = (newLink) => {
    setActiveLink(activeLink === newLink ? newLink : newLink);
    accessType = newLink;
  };

  useEffect(() => {
    if (accessType === "log-in") {
      setActiveLink("log-in");
    } else if (accessType === "sign-up") {
      setActiveLink("sign-up");
    }
  }, [accessType]);

  const modalLinks = ({ isActive, newLink }) => {
    return {
      borderBottom:
        isActive && activeLink === newLink
          ? newLink === "log-in"
            ? "4px solid #43C0F6"
            : "4px solid #F91C85"
          : "none",
      color: isActive ? "#707070" : "#A5A5A5",
    };
  };

  return (
    <MuiModal
      open={openModal}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={openModal}>
        <Container maxWidth="md" sx={style}>
          <CardMedia
            component="img"
            image={CloseImage}
            alt="Close Modal Image"
            onClick={handleModalClose}
            sx={{
              position: "absolute",
              top: "30px",
              right: "30px",
              width: "30px",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
          <Grid container direction="row">
            <Grid
              item
              xs
              container
              justifyContent={"center"}
              alignItems={"center"}
              direction={"column"}
            >
              <Grid item xs>
                <CardMedia
                  component="img"
                  image={StudentsImage}
                  alt="Students Image"
                  sx={{
                    width: "250px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Grid>
              <Grid item xs>
                <Typography
                  variant="h4"
                  component="p"
                  sx={{
                    fontFamily: "Nunito",
                    fontSize: "2.625rem",
                    fontWeight: 900,
                    color: "#707070",
                  }}
                >
                  Students
                </Typography>
              </Grid>
              <Grid
                item
                xs
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                gap="1rem"
                mt="2rem"
              >
                <Typography
                  variant="h6"
                  component="p"
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "1.125rem",
                    fontWeight: "bold",
                    cursor: "pointer",
                    color: "#707070",
                    ...modalLinks({
                      isActive: activeLink === "log-in",
                      newLink: "log-in",
                    }),
                  }}
                  onClick={() => handleClick("log-in")}
                >
                  LOG IN
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "1.125rem",
                    fontWeight: "bold",
                    cursor: "pointer",
                    color: "#707070",
                    ...modalLinks({
                      isActive: activeLink === "sign-up",
                      newLink: "sign-up",
                    }),
                  }}
                  onClick={() => handleClick("sign-up")}
                >
                  SIGN UP
                </Typography>
              </Grid>
              <Grid item xs>
                {activeLink === "log-in" && <LogIn />}
                {activeLink === "sign-up" && <SignUp />}
              </Grid>
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ height: "inherit", border: "1px solid #707070" }}
            />
            <Grid
              item
              xs
              container
              justifyContent={"center"}
              alignItems={"center"}
              direction={"column"}
            >
              <Grid item xs>
                <CardMedia
                  component="img"
                  image={TeachersImage}
                  alt="Teachers Image"
                  sx={{
                    width: "250px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Grid>
              <Grid item xs>
                <Typography
                  variant="h4"
                  component="p"
                  sx={{
                    fontFamily: "Nunito",
                    fontSize: "2.625rem",
                    fontWeight: 900,
                    color: "#707070",
                  }}
                >
                  Teachers
                </Typography>
              </Grid>
              <Grid
                item
                xs
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                gap="1rem"
                mt="2rem"
              >
                <Typography
                  variant="h6"
                  component="p"
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "1.125rem",
                    fontWeight: "bold",
                    cursor: "pointer",
                    color: "#707070",
                    ...modalLinks({
                      isActive: activeLink === "log-in",
                      newLink: "log-in",
                    }),
                  }}
                  onClick={() => handleClick("log-in")}
                >
                  LOG IN
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "1.125rem",
                    fontWeight: "bold",
                    cursor: "pointer",
                    color: "#707070",
                    ...modalLinks({
                      isActive: activeLink === "sign-up",
                      newLink: "sign-up",
                    }),
                  }}
                  onClick={() => handleClick("sign-up")}
                >
                  SIGN UP
                </Typography>
              </Grid>
              <Grid item xs>
                {activeLink === "log-in" && <LogIn />}
                {activeLink === "sign-up" && <SignUp />}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </MuiModal>
  );
};

export default AccessModal;
