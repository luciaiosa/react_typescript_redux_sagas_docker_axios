import React, { FunctionComponent } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Menu from '../menu/Menu';

const logo = require("../../assets/logo.png");

const LinksContainer = styled.div`
  padding: 0.25em 1em;
  display: flex;
  justify-items: center;
  align-items: flex-start;
  flex-direction: column;
`;

const Logo = styled.img`
    width: 60px;
    heigth: 60px;
`;

interface HeaderProps {
    children?: JSX.Element
}

const Header: FunctionComponent<HeaderProps> = (props: HeaderProps): JSX.Element => {

    return (
        <LinksContainer>
         {/* <div className="ui secondary pointing menu"> */}
            <div className="ui secondary pointing menu">
                
                <Link to="/" className="link"><Logo src={logo} alt="logo" /></Link>
                <Menu></Menu>
                
            </div>
            <div>
            {props.children}
            </div>
            
        {/* </div> */}
        </LinksContainer>
    );
}

export default Header;
