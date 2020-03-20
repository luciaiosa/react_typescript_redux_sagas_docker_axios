import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
`

interface FooterProps {
    content: string
}
const Footer: FunctionComponent<FooterProps> = (props: FooterProps): JSX.Element => {
    return (
        <FooterContainer>
            <p>{props.content}</p>
        </FooterContainer>
    );
};

export default Footer;