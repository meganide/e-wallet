import * as ElementStyled from '../../styles/elements.js';
import * as HomeStyled from './Home.styles';

import { useEffect, useState } from 'react';

import Card from '../../components/Card/Card';
import CardStack from '../../components/CardStack/CardStack.js';
import { ICardData } from '../../utils/interfaces.js';
import Top from '../../components/Top/Top';
import { useNavigate } from 'react-router-dom';

const Styled = { ...ElementStyled, ...HomeStyled };

function Home() {
  const navigate = useNavigate();
  const [cardVendors, setCardVendors] = useState<ICardData[] | []>([]);

  useEffect(() => {
    let cards = localStorage.getItem('cards');

    if (cards) {
      const cardsArray: ICardData[] = JSON.parse(cards);
      setCardVendors(cardsArray);
    }
  }, []);

  function handleNavigate() {
    navigate('/addcard');
  }

  function handleDeleteCard() {
    const [activeCard, ...rest] = cardVendors;
    setCardVendors(rest);
    localStorage.setItem('cards', JSON.stringify(rest));
  }

  return (
    <Styled.Container>
      {cardVendors.length === 0 ? (
        <Top heading="E-Wallet" statusText="No cards..." />
      ) : (
        <>
          <Top heading="E-Wallet" statusText="active card" />
          <Styled.DeleteButton onClick={handleDeleteCard}>Delete</Styled.DeleteButton>
          <Card cardData={cardVendors[0]} />
          <CardStack setCardVendors={setCardVendors} cardVendors={cardVendors} />
        </>
      )}
      <Styled.Button onClick={handleNavigate}>ADD A NEW CARD</Styled.Button>
    </Styled.Container>
  );
}

export default Home;
