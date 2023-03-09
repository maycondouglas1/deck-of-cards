import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  width: "100%",
}));

export const Content = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  maxWidth: "1200px",
  padding: "5rem",

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  },

  [theme.breakpoints.down("xs")]: {
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  },
}));

export const Head = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  padding: "30px",
  margin: "0 auto",
  width: "100%",
  maxWidth: "1200px",
}));

export const CardContainer = styled("div")(({ theme }) => ({
  padding : "1rem",
}));

export const BackCardContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem",
  marginTop: "2rem",
  width: "226px",
  height: "314px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  transition: "all 0.3s ease-in-out",
}));

