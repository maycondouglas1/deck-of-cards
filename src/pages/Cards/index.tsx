import React, { Fragment, useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import Navbar from "../../components/Navbar";
import {
  CardContainer,
  Container,
  Content,
  Head,
  BackCardContainer,
} from "./styles";
import { useCard } from "../../hooks/useCard";
import Button from "../../components/Button";
import Loading from "../../components/Loading";

const Cards: React.FC = () => {
  const { cards, loading, fetchOneCard, shuffleCards } = useCard(5);
  const [count, setCount] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFetchOneCard = () => {
    fetchOneCard();
    setCount(count + 1);
  };

  const randomNumber = () => {
    return Math.floor(Math.random() * 10) + 1;
  };

  return (
    <Fragment>
      <Navbar />
      <Container>
        {loading && <Loading />}
        <Head>
          <Button onClick={() => setIsFlipped(!isFlipped)}>
            {isFlipped ? "Voltar" : "Virar"}
          </Button>
          <Button
            disabled={count < 3 ? false : true}
            onClick={handleFetchOneCard}
          >
            Pegar mais uma
          </Button>
          <Button onClick={shuffleCards}>Embaralhar</Button>
        </Head>
        <Content>
          {cards.map((card) => (
            <ReactCardFlip key={card.code} isFlipped={isFlipped}>
              <CardContainer>
                <img src={card.image} alt="card" />
              </CardContainer>
              <BackCardContainer>
                <p>Naipe: {card.suit} </p>
                <p>Valor: {randomNumber()}</p>
              </BackCardContainer>
            </ReactCardFlip>
          ))}
        </Content>
      </Container>
    </Fragment>
  );
};

export default Cards;
