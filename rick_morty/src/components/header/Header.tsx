import React, { FunctionComponent } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Menu from '../menu/Menu';

const logo = require("../../assets/logo1.png");

const LinksContainer = styled.div`
  display: flex;
  justify-items: center;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
  font-size: large;
`;

const MenuContainer = styled.div`
    border-bottom: 2px solid rgba(34,36,38,.15);
    border-radius: 0;
    font-size: 1rem;
    display: flex;
    width: 100%;
    padding: 1rem;
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    font-weight: 600;
    min-height: 3rem;
`;

const Logo = styled.img`
    width: 100px;
    heigth: 90px;
`;

interface HeaderProps {
    children?: JSX.Element
}

const Header: FunctionComponent<HeaderProps> = (props: HeaderProps): JSX.Element => {

    return (
        <LinksContainer>
            <MenuContainer>                
                <Link to="/" className="link"><Logo src={logo} alt="logo" /></Link>
                <Menu></Menu>               
            </MenuContainer>
            <div>
            {props.children}
            </div>
            
        {/* </div> */}
        </LinksContainer>
    );
}

export default Header;
