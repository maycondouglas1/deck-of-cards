import { Button, styled } from "@mui/material";

export const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#F5A623",
  color: "#FFF",
  fontWeight: "700",
  fontSize: "14px",
  cursor: "pointer",
  padding: "0.5rem 1.25rem",
  borderRadius: "7px",
  textTransform: "none",
  display: "block",
  border: "2px solid transparent",
  "&:hover": {
    backgroundColor: "#F5A100",
    color: "#FFF",
    borderColor: "#F5A100",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
