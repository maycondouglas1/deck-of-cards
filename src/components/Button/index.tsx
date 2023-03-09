import React from "react";
import IButton from "../../types/Button";
import { CustomButton } from "./styles";

const Button: React.FC<IButton> = ({ children, onClick, disabled }) => {
  return (
    <CustomButton disabled={disabled} onClick={onClick}>
      {children}
    </CustomButton>
  );
};

export default Button;
