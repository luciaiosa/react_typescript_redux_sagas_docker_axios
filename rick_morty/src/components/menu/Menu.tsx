import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import './Menu.css';

const Menu = (): JSX.Element => {
  return (
    <>
      <Link to="/characters" className="link">Characters</Link>
      <Link to="/locations" className="link">Locations</Link>
      <Link to="/episodes" className="link">Episodes</Link>
      {/* <Link to="/episodes/1">Episode 1</Link> */}
    </>
  );
};

export default Menu;
