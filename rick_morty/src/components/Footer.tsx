import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
`

interface FooterProps {
    name: string
}
const Footer: FunctionComponent<FooterProps> = (props: FooterProps): JSX.Element => {
    return (
        <FooterContainer>
            <p>Footer: Contacta con nosotros</p>
        </FooterContainer>
    );
};

export default Footer;