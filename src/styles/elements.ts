import styled from 'styled-components';

interface IProps {
  width?: string;
  height?: string;
  color?: string;
  fontSize?: string;
  margin?: string;
  alignItems?: string;
}

const H1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
`;

const Paragraph = styled.p`
  font-family: 'PT Mono', monospace;
  font-size: ${(props: IProps) => (props.fontSize ? props.fontSize : '1.6rem')};
  box-shadow: 0.5px 0.5px 0px 0px #fefefe3d inset;
  text-align: center;
  margin: ${(props: IProps) => props.margin};
  color: ${(props: IProps) => props.color};
  text-transform: uppercase;
`;

const SecondaryParagraph = styled.p`
  text-align: center;
  font-family: 'Source Sans Pro', sans-serif;
  color: #22222299;
  font-size: 0.75rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-weight: 600;
`;

const Image = styled.img`
  width: ${(props: IProps) => props.width};
  width: ${(props: IProps) => props.width};
`;

const FlexRow = styled.section`
  display: flex;
`;

const FlexColumn = styled.section`
  display: flex;
  flex-direction: column;
  align-items: ${(props: IProps) =>
    props.alignItems ? props.alignItems : 'flex-start'};
`;



export { H1, SecondaryParagraph, Image, Paragraph, FlexRow, FlexColumn };