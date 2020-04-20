import styled from 'styled-components';

const Button = styled.button`
  background: palevioletred;
  color: white;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;
  /* Adapt the colors based on primary prop */
// background: ${props => props.primary ? "palevioletred" : "white"};
// color: ${props => props.primary ? "white" : "palevioletred"};

const InfoButton = styled(Button)`
  background: #1a91eb;
  color: white;
  border: 2px solid #1a91eb;
`;

const DangerButton = styled(Button)`
  background: #f95359;
  color: white;
  border: 2px solid #f95359;
`;

export {Button, InfoButton, DangerButton};