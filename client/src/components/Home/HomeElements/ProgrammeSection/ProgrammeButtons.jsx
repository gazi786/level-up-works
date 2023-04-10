import { Box, Grid } from "@mui/material";
import React from "react";
import { LevelUpButtons } from "../../../../styles/General/Buttons";

const ProgrammeButtons = ({ programme, index, onClick, selectedButton }) => {
  return (
    <Box item xs={12} md={3} key={index}>
      {console.log(programme.btnName)}
      <LevelUpButtons
        id={programme.id}
        variant="contained"
        className={`primary-btn ${
          programme.btnName === selectedButton && "selected"
        }`}
        onClick={() => onClick(programme.btnName)}
      >
        {programme.name}
      </LevelUpButtons>
      {console.log(programme.btnName)}
    </Box>
  );
};

export default ProgrammeButtons;
