import * as StyledAddCard from './AddCard.styles';
import * as StyledElements from '../../styles/elements';

import { formatDate, getVendorIcon } from '../../utils/helpers';

import Card from './../../components/Card/Card';
import Top from '../../components/Top/Top';
import { useState } from 'react';

const Styled = { ...StyledElements, ...StyledAddCard };

function AddCard() {
  const [cardData, setCardData] = useState({
    iconPathUrl: '/assets/vendor-bitcoin.svg',
    cardNumber: 'XXXX XXXX XXXX XXXX',
    cardholderName: 'firstname lastname',
    validThru: 'mm/yy',
    vendor: '',
  });

  function handleChangeCardData(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
    let value = e.target.value;

    if (e.target.name === 'validThru') {
      value = formatDate(e.target.value);
      console.log('value', value);
    }

    if (e.target.name === 'vendor') {
      const iconPathUrl = getVendorIcon(e.target.value);
      setCardData((prev) => ({
        ...prev,
        iconPathUrl,
      }));
    }

    setCardData((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));
  }

  return (
    <Styled.Container>
      <Top heading="Add a new bank card" statusText="new card" />
      <Card cardData={cardData} />
      <Styled.Form>
        <Styled.FlexColumn>
          <Styled.Label htmlFor="cardNumber">Card Number</Styled.Label>
          <Styled.Input type="text" name="cardNumber" id="cardNumber" onChange={handleChangeCardData} />
        </Styled.FlexColumn>
        <Styled.FlexColumn>
          <Styled.Label htmlFor="cardholderName">Cardholder name</Styled.Label>
          <Styled.Input type="text" name="cardholderName" id="cardholderName" onChange={handleChangeCardData} />
        </Styled.FlexColumn>
        <Styled.FlexRow>
          <Styled.FlexColumn>
            <Styled.Label htmlFor="validThru">Valid thru</Styled.Label>
            <Styled.Input type="date" name="validThru" id="validThru" onChange={handleChangeCardData} />
          </Styled.FlexColumn>
          <Styled.FlexColumn>
            <Styled.Label htmlFor="ccv">ccv</Styled.Label>
            <Styled.Input type="number" name="ccv" id="ccv" />
          </Styled.FlexColumn>
        </Styled.FlexRow>
        <Styled.FlexColumn>
          <Styled.Label htmlFor="vendor">Vendor</Styled.Label>
          <select name="vendor" id="vendor" onChange={handleChangeCardData}>
            <option value="Bitcoin Inc">Bitcoin Inc</option>
            <option value="Block Chain Inc">Block Chain Inc</option>
            <option value="Evil Corp">Evil Corp</option>
            <option value="Ninja Bank">Ninja Bank</option>
          </select>
        </Styled.FlexColumn>
        <Styled.SecondaryButton>ADD CARD</Styled.SecondaryButton>
      </Styled.Form>
    </Styled.Container>
  );
}

export default AddCard;
