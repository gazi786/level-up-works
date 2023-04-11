import React from "react";
import HomePageMain from "../components/Home/HomePageMain";
import FooterPaged from "../components/Navigation/Footer/FooterPaged";
import Navbar from "../components/Navigation/NavBar/NavigationPaged";
import NavigationPaged from "../components/Navigation/NavBar/NavigationPaged";

const Home = ({ modalProps }) => {
  const { openModal, handleModalOpen, handleModalClose, accessType } =
    modalProps;

  return (
    <>
      <NavigationPaged
        handleModalOpen={(type) => handleModalOpen(type)}
        accessType={accessType}
      />
      <HomePageMain
        modalProps={{
          openModal: openModal,
          handleModalOpen: (type) => handleModalOpen(type),
          handleModalClose: handleModalClose,
          accessType: accessType,
        }}
      />
      <FooterPaged />
    </>
  );
};

export default Home;
