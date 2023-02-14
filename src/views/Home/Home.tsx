import * as HomeStyled from './Home.styles';
import * as elementsStyled from '../../styles/elements.js';

import Card from '../../components/Card/Card';
import CardStack from '../../components/CardStack/CardStack.js';
import { cardVendors as cardVendorsData } from '../../utils/cardVendors.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Styled = { ...elementsStyled, ...HomeStyled };

function Home() {
  const navigate = useNavigate();
  const [cardVendors, setCardVendors] = useState(cardVendorsData)

  function handleNavigate() {
    navigate('/addcard');
  }

  return (
    <Styled.Container>
      <Styled.H1>E-wallet</Styled.H1>
      <Styled.SecondaryParagraph>Active Card</Styled.SecondaryParagraph>
      <Card cardData={cardVendors[0]} />
      <CardStack setCardVendors={setCardVendors} cardVendors={cardVendors}/>
      <Styled.Button onClick={handleNavigate}>ADD A NEW CARD</Styled.Button>
    </Styled.Container>
  );
}

export default Home;
