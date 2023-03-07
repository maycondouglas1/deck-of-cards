import React from "react";
import { useNavigate } from "react-router-dom";
import IButton from "../../types/Button";
import { CustomButton } from "./styles";

const Button: React.FC<IButton> = ({ children, onClick }) => {
  return <CustomButton onClick={onClick}>{children}</CustomButton>;
};

export default Button;
