import * as CardStyled from './Card.styles';
import * as ElementsStyled from '../../styles/elements.js';

import { ICardData } from '../../utils/interfaces';
import { getBackgroundColor } from '../../utils/cardVendors';

const Styled = { ...CardStyled, ...ElementsStyled };

interface IProps {
  cardData: ICardData;
  isStack?: boolean;
  cardNumber?: number;
  onClick?: () => void;
}

function Card(props: IProps) {
  const { cardData, ...rest } = props;

  const vendorBackgroundColor = getBackgroundColor(cardData.vendor);

  return (
    <Styled.Card
      background={vendorBackgroundColor}
      {...rest}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        layout: { duration: 0.5 },
        opacity: { duration: 0.5 },
        y: { duration: 0.5 },
      }}
    >
      <Styled.CardHeader>
        <Styled.Image src="/assets/chip-dark.svg" />
        <Styled.Image src={cardData.iconPathUrl} />
      </Styled.CardHeader>
      <Styled.Paragraph margin="0.8rem 0" color={props.isStack ? 'white' : 'rgba(0,0,0,0.8)'}>
        {cardData.cardNumber}
      </Styled.Paragraph>
      <Styled.CardFooter>
        <Styled.FlexColumn>
          <Styled.Paragraph fontSize="0.75rem" color={props.isStack ? 'white' : 'rgba(0,0,0,0.8)'}>
            CARDHOLDER NAME
          </Styled.Paragraph>
          <Styled.Paragraph fontSize="1.125rem" color={props.isStack ? 'white' : 'rgba(0,0,0,0.8)'}>
            {cardData.cardholderName}
          </Styled.Paragraph>
        </Styled.FlexColumn>
        <Styled.FlexColumn alignItems="flex-end">
          <Styled.Paragraph fontSize="0.75rem" color={props.isStack ? 'white' : 'rgba(0,0,0,0.8)'}>
            VALID THRU
          </Styled.Paragraph>
          <Styled.Paragraph fontSize="1.125rem" color={props.isStack ? 'white' : 'rgba(0,0,0,0.8)'}>
            {cardData.validThru}
          </Styled.Paragraph>
        </Styled.FlexColumn>
      </Styled.CardFooter>
    </Styled.Card>
  );
}

export default Card;
