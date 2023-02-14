import * as Styled from '../../styles/elements.js';

import Card from '../../components/Card/Card';
import CardStack from '../../components/CardStack/CardStack.js';
import Top from '../../components/Top/Top';
import { cardVendors as cardVendorsData } from '../../utils/cardVendors.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Home() {
  const navigate = useNavigate();
  const [cardVendors, setCardVendors] = useState(cardVendorsData)

  function handleNavigate() {
    navigate('/addcard');
  }

  return (
    <Styled.Container>
      <Top heading="E-Wallet" statusText='active card'/>
      <Card cardData={cardVendors[0]} />
      <CardStack setCardVendors={setCardVendors} cardVendors={cardVendors}/>
      <Styled.Button onClick={handleNavigate}>ADD A NEW CARD</Styled.Button>
    </Styled.Container>
  );
}

export default Home;
