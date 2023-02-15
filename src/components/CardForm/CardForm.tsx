import * as StyledCardForm from './CardForm.styles';
import * as StyledElements from '../../styles/elements';

import { formatDate, getVendorIcon } from '../../utils/helpers';

import { FormEvent } from 'react';
import { ICardData } from '../../utils/interfaces';
import { useNavigate } from 'react-router-dom';

const Styled = { ...StyledElements, ...StyledCardForm };

interface IProps {
  cardData: ICardData;
  setCardData: React.Dispatch<React.SetStateAction<ICardData>>;
}

function CardForm(props: IProps) {
  const { cardData, setCardData } = props;

  const navigate = useNavigate();

  function handleChangeCardData(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
    let value = e.target.value;

    if (e.target.name === 'validThru') {
      value = formatDate(e.target.value);
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

  function handleAddCard(e: FormEvent) {
    e.preventDefault();

    const cards = localStorage.getItem('cards');

    if (cards) {
      const cardsArray: ICardData[] = JSON.parse(cards);
      cardsArray.push(cardData);
      localStorage.setItem('cards', JSON.stringify(cardsArray));
    } else {
      localStorage.setItem('cards', JSON.stringify([cardData]));
    }

    navigate('/');
  }

  return (
    <Styled.Form onSubmit={handleAddCard}>
      <Styled.FlexColumn>
        <Styled.Label htmlFor="cardNumber">Card Number</Styled.Label>
        <Styled.Input type="text" name="cardNumber" id="cardNumber" required onChange={handleChangeCardData} />
      </Styled.FlexColumn>
      <Styled.FlexColumn>
        <Styled.Label htmlFor="cardholderName">Cardholder name</Styled.Label>
        <Styled.Input type="text" name="cardholderName" id="cardholderName" required onChange={handleChangeCardData} />
      </Styled.FlexColumn>
      <Styled.FlexRow spaceBetween gap="2rem">
        <Styled.FlexColumn>
          <Styled.Label htmlFor="validThru">Valid thru</Styled.Label>
          <Styled.Input type="date" name="validThru" id="validThru" required onChange={handleChangeCardData} />
        </Styled.FlexColumn>
        <Styled.FlexColumn>
          <Styled.Label htmlFor="ccv">ccv</Styled.Label>
          <Styled.Input type="number" name="ccv" id="ccv" required />
        </Styled.FlexColumn>
      </Styled.FlexRow>
      <Styled.FlexColumn>
        <Styled.Label htmlFor="vendor">Vendor</Styled.Label>
        <Styled.Select name="vendor" id="vendor" onChange={handleChangeCardData} required>
          <option value="" hidden></option>
          <option value="Bitcoin Inc">Bitcoin Inc</option>
          <option value="Block Chain Inc">Block Chain Inc</option>
          <option value="Evil Corp">Evil Corp</option>
          <option value="Ninja Bank">Ninja Bank</option>
        </Styled.Select>
      </Styled.FlexColumn>
      <Styled.SecondaryButton>ADD CARD</Styled.SecondaryButton>
    </Styled.Form>
  );
}

export default CardForm;
