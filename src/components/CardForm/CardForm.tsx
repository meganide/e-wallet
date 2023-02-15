import * as StyledCardForm from './CardForm.styles';
import * as StyledElements from '../../styles/elements';

import { formatDate, getVendorIcon } from '../../utils/helpers';

import { ICardData } from '../../utils/interfaces';

const Styled = { ...StyledElements, ...StyledCardForm };

interface IProps {
  setCardData: React.Dispatch<React.SetStateAction<ICardData>>;
}

function CardForm(props: IProps) {
  const { setCardData } = props;

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
    <Styled.Form>
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
        <Styled.Select name="vendor" id="vendor" value="" onChange={handleChangeCardData} required>
          <option defaultValue="" value="" disabled hidden></option>
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
