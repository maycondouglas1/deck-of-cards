import React from "react";
import { Grid, TextField, Typography } from "@mui/material";
import { useForm } from "../../hooks/useForm";
import { Container, Content } from "./styles";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const { name, handleName } = useForm();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/cards");
  };

  return (
    <Container>
      <Content>
        <Typography variant="h5">
          Bem vindo ao Deck Builder
        </Typography>
        <TextField
          id="name"
          label="Digite seu nome"
          variant="standard"
          value={name}
          required
          onChange={handleName}
        />
        <Button onClick={handleNavigate}>Ver cartas</Button>
      </Content>
    </Container>
  );
};

export default Home;
