import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/system";
import { styled } from "@mui/material";

export const NavLink = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: "#FFF",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    color: "#F5A623",
  },
}));

export const NavbarLinksBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
  cursor: "pointer",
  display: "none",
  marginRight: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

export const NavbarContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(5),
  height: "150px",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
}));

export const NavbarLogo = styled("img")(({ theme }) => ({
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  width: "130px",
}));

export const UserName = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: "#FFF",
    fontWeight: "bold",
}));
