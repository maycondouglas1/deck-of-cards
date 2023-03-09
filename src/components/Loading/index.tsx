import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Container } from "./styles";

const Loading: React.FC = () => {
  return (
    <Container>
      <ClipLoader color="#F5A623" size={50} />
    </Container>
  );
};

export default Loading;
