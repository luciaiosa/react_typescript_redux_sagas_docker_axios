import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Menu from "../menu/Menu";
import { useStyles } from "../menu/MenuStyles";

const logo = require("../../assets/logo1.png");

interface HeaderProps {
    children?: JSX.Element;
}

const Header: FunctionComponent<HeaderProps> = (
    props: HeaderProps
): JSX.Element => {
    const classes = useStyles();
    return (
        <LinksContainer>
            <MenuContainer>
                <Link to="/" className={classes.linkMenu}>
                    <Logo src={logo} alt="logo" />
                </Link>
                <Menu></Menu>
            </MenuContainer>
            <HeaderBreadcrumbsContainer>
                {props.children}
            </HeaderBreadcrumbsContainer>
        </LinksContainer>
    );
};

const LinksContainer = styled.div`
    margin-top: 30px;
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
    padding-left: 205px;
    font-size: 18px;
`;

export default Header;
