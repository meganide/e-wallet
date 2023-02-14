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
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" name="cardNumber" id="cardNumber" onChange={handleChangeCardData} />
        </Styled.FlexColumn>
        <Styled.FlexColumn>
          <label htmlFor="cardholderName">Cardholder name</label>
          <input type="text" name="cardholderName" id="cardholderName" onChange={handleChangeCardData} />
        </Styled.FlexColumn>
        <Styled.FlexRow>
          <Styled.FlexColumn>
            <label htmlFor="validThru">Valid thru</label>
            <input type="date" name="validThru" id="validThru" onChange={handleChangeCardData} />
          </Styled.FlexColumn>
          <Styled.FlexColumn>
            <label htmlFor="ccv">ccv</label>
            <input type="number" name="ccv" id="ccv" />
          </Styled.FlexColumn>
        </Styled.FlexRow>
        <Styled.FlexColumn>
          <label htmlFor="vendor">Vendor</label>
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
