import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
    margin-top: 30px;
    margin-bottom: 20px;
    flex-direction: column;
`
const FooterContent = styled.span`
    align-self: center;
    margin-bottom: 10px;
`

interface FooterProps {
    content: {
        copyright: string,
        charactersNumber: number
    }
}
const Footer: FunctionComponent<FooterProps> = (props: FooterProps): JSX.Element => {
    return (
        <FooterContainer>
            <FooterContent>Characters: {props.content.charactersNumber} Characters: {props.content.charactersNumber}</FooterContent>
            <FooterContent>{props.content.copyright}</FooterContent>
        </FooterContainer>
    );
};

export default Footer;