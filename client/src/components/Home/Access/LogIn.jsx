import { styled, TextField } from "@mui/material";
import React, { useState } from "react";
import { LevelUpButtons } from "../../../styles/General/Buttons";

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "300px",
  border: " 0.2rem solid #A29F9F",
  borderRadius: "1.5rem",
  fontSize: "0.85rem",
  height: "1.5rem",
}));

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        gap: "2rem",
      }}
    >
      <StyledTextField
        label="Email"
        type="email"
        variant="outlined"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <StyledTextField
        label="Password"
        type="password"
        variant="outlined"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div>
        <LevelUpButtons
          variant="contained"
          className="secondary-btn"
          type="submit"
          sx={{ margin: "2rem" }}
        >
          LOG IN
        </LevelUpButtons>
      </div>
    </form>
  );
};

export default LogIn;
