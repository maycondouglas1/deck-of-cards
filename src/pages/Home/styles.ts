import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(5),
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "100vh",
}));

export const Content = styled("div")(({ theme }) => ({
  gap: theme.spacing(5),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  maxWidth: "480px",
  backgroundColor: "white",
  padding: theme.spacing(5),
  borderRadius: "5px",

  "& .MuiTextField-root": {
    width: "100%",
    color: "#FFF",
  },
}));
