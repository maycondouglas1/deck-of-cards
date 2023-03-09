import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
    position: "fixed",
    top: "0",
    bottom: "0",
    right: "0",
    left: "0",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: "9999",
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 200ms ease-out",
    margin: "auto",
}));
