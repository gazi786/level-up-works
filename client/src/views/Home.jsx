import React from "react";
import HomePageMain from "../components/Home/HomePageMain";
import Footer from "../components/Navigation/Footer/FooterMain";

const Home = ({ openModal, handleModalOpen, handleModalClose, accessType }) => {
  return (
    <>
      <HomePageMain
        openModal={openModal}
        handleModalOpen={(type) => handleModalOpen(type)}
        handleModalClose={handleModalClose}
        accessType={accessType}
      />
      <Footer />
    </>
  );
};

export default Home;
