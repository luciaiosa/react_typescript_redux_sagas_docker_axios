import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Menu from "../menu/Menu";

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
    padding-top: 25px;
    padding-bottom: 20px;
    flex-direction: column;
    background-color: rgb(32, 35, 41);
    color: rgb(158, 158, 158);
    height: 100px;
    margin-bottom: 10px;
    margin-top: 20px;
`;
const FooterContent = styled.span`
    align-self: center;
    padding-top: 10px;
`;

interface FooterProps {
    copyright: string;
}
const Footer: FunctionComponent<FooterProps> = (
    props: FooterProps
): JSX.Element => {
    return (
        <FooterContainer>
            <Menu></Menu>
            <FooterContent>{props.copyright}</FooterContent>
        </FooterContainer>
    );
};

export default Footer;
