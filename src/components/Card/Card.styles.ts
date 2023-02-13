import { FlexColumn } from '../../styles/elements';
import styled from 'styled-components';

interface IProps {
  background: string;
}

const Card = styled.section`
  background: linear-gradient(
      248.04deg,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(255, 255, 255, 0) 99.07%
    ),
    ${(props: IProps) => props.background};
  box-shadow: 0px 0px 0.5rem rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  padding: 1.5rem;
  max-width: 382px;
`;

const CardHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const CardIcons = styled(FlexColumn)``;

const CardFooter = styled(CardHeader)``;

export { Card, CardHeader, CardIcons, CardFooter };
