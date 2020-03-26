import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Menu from "../menu/Menu";

const logo = require("../../assets/logo1.png");

const LinksContainer = styled.div`
    margin-top: 30px;
    width: 100%;
    background-color: #ff01c1;
    padding-top: 15px;
    padding-left: 20px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const MenuContainer = styled.div`
    // border-bottom: 2px solid rgba(34, 36, 38, 0.15);
    border-radius: 0;
    font-size: 1rem;
    display: flex;
    width: 100%;
    padding: 1rem;
    font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
    font-weight: 600;
    min-height: 3rem;
`;

const Logo = styled.img`
    width: 150px;
    heigth: 120px;
`;

const HeaderBreadcrumbsContainer = styled.div`
    padding-left: 175px;
    font-size: 18px;
`;

interface HeaderProps {
    children?: JSX.Element;
}

const Header: FunctionComponent<HeaderProps> = (
    props: HeaderProps
): JSX.Element => {
    return (
        <LinksContainer className="links-container">
            <MenuContainer className="menu-container">
                <Link to="/" className="link">
                    <Logo src={logo} alt="logo" />
                </Link>
                <Menu></Menu>
            </MenuContainer>
            <HeaderBreadcrumbsContainer className="header-breadcrumbs-container">
                {props.children}
            </HeaderBreadcrumbsContainer>
        </LinksContainer>
    );
};

export default Header;
