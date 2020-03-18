import React, { FunctionComponent } from 'react';
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import Menu from '../Menu';
const logo = require("../../assets/logo.png");

const LinksContainer = styled.div`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  display: flex;
  justify-items: center;
  align-items: center;
`;

const Logo = styled.img`
    width: 60px;
    heigth: 60px;
`;

interface HeaderProps {
    primary?: boolean
}

const Header: FunctionComponent<HeaderProps> = (props: HeaderProps): JSX.Element => {

    return (
        <>
            <BrowserRouter >
                <LinksContainer>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column" }}>
                        <Link to="/"><Logo src={logo} alt="logo" /></Link>
                        <Menu name="menu"></Menu>
                    </div>
                </LinksContainer>
            </BrowserRouter>

            <h1>Header: logo, menu, breadcrumbs con navegación</h1>

        </>
    );
}

export default Header;
