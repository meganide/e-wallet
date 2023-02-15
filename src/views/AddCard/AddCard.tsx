import * as Styled from '../../styles/elements';

import Card from './../../components/Card/Card';
import CardForm from '../../components/CardForm/CardForm';
import Top from '../../components/Top/Top';
import { useState } from 'react';

function AddCard() {
  const [cardData, setCardData] = useState({
    iconPathUrl: '/assets/vendor-bitcoin.svg',
    cardNumber: 'XXXX XXXX XXXX XXXX',
    cardholderName: 'firstname lastname',
    validThru: 'mm/yy',
    vendor: '',
  });

  console.log(cardData)

  return (
    <Styled.Container>
      <Top heading="Add a new bank card" statusText="new card" />
      <Card cardData={cardData} />
      <CardForm setCardData={setCardData} />
    </Styled.Container>
  );
}

export default AddCard;
