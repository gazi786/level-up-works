import { Button, styled } from "@mui/material";
import React from "react";

const HeroButtons = styled(Button)(({ theme }) => ({
  display: "inline-block",
  fontFamily: "Nunito, sans-serif",
  fontWeight: 700,
  color: "#707070",
  textAlign: "center",
  verticalAlign: "middle",
  backgroundColor: "transparent",
  border: "0.2rem solid transparent",
  padding: "0.375rem 0.75rem",
  fontSize: "1rem",
  lineHeight: "1.5",
  borderRadius: "0.5rem",
  letterSpacing: "0.02rem",
  minHeight: "2.2rem",
  minWidth: "11rem",
  transition:
    "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
  "&.primary-btn": {
    color: "#6C6C6C",
    backgroundColor: "#fff",
    borderColor: "#43C0F6",
    "&:hover": { backgroundColor: "#fff", borderColor: "#43c0f6" },
    "&:focus": { boxShadow: "0 0 0 0.2rem rgba(67, 192, 246, 0.5)" },
  },

  "&.secondary-btn": {
    color: "#fff",
    backgroundColor: "#F91C85",
    borderColor: "#F91C85",
    "&:hover": { backgroundColor: "#cd114e", borderColor: "#c1104a" },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(239, 59, 117, 0.5)",
    },
  },
  "&.selected": {
    boxShadow: "0 0 0 0.2rem rgba(0, 0, 0, 0.161)",
    backgroundColor: "#EFEFF1",
    borderColor: "#EFEFF1",
    "&:hover": { backgroundColor: "#EFEFF1", borderColor: "#EFEFF1" },
    "&:focus": { boxShadow: "0 0 0 0.2rem rgba(0, 0, 0, 0.3)" },
  },
}));

const LevelUpButtons = ({ children, className, onClick }) => {
  return (
    <HeroButtons className={className} onClick={onClick}>
      {children}
    </HeroButtons>
  );
};

export { LevelUpButtons };
