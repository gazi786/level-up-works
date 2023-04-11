import { Box } from "@mui/material";
import React from "react";
import Hero from "./HomeElements/Hero";
import AboutSection from "./HomeElements/AboutSection";
import DigitalSkillSection from "./HomeElements/DigitalSkillSection";
import ProgrammeSection from "./HomeElements/ProgrammeSection";
import WhatWaitingSection from "./HomeElements/WhatWaitingSection";
import AccessModal from "./Access/AccessModal";

const HomePageMain = ({ modalProps }) => {
  const { openModal, handleModalOpen, handleModalClose, accessType } =
    modalProps;
  return (
    <Box>
      <Hero handleModalOpen={(type) => handleModalOpen(type)} />
      <AboutSection />
      <DigitalSkillSection />
      <ProgrammeSection />
      <WhatWaitingSection handleModalOpen={(type) => handleModalOpen(type)} />
      <AccessModal
        openModal={openModal}
        handleModalClose={handleModalClose}
        accessType={accessType}
      />
    </Box>
  );
};

export default HomePageMain;
