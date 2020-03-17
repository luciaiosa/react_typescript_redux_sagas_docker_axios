import React, { FunctionComponent } from 'react';
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import CharactersList from '../containers/characters/CharactersList';
import LocationsList from '../containers/locations/LocationsList';
import EpisodesList from '../containers/episodes/EpisodesList';
import EpisodeDetail from '../containers/episodes/EpisodeDetail';

interface MenuProps {
  name: string
}

const Menu: FunctionComponent<MenuProps> = (props: MenuProps): JSX.Element => {
  return (
    <>
      <BrowserRouter >
          <Link to="/characters">Characters List</Link>
          <Link to="/locations">Locations List</Link>
          <Link to="/episodes">Episodes List</Link>
          <Link to="/episodes/1">Episode 1</Link>
          {/* <Header primary/> */}
          {/* Switch mira todas las rutas, y solo va a mostrar la primera ruta que encuentra que coincide con el path */}
          <Switch>
            {/* <Route path="/characters" exact component={CharactersList} />
                        I want to pass a prop to the component, so instead of using component, I'll use the render prop. 
                        render accepts a functional component and that function won’t get unnecessarily remounted like with component. 
                        That function will also receive all the same props that component would receive. So I can pass props along to the rendered component. */}
            <Route path="/characters" exact render={() => <CharactersList resource="character" />} />
            <Route path="/locations" exact render={() => <LocationsList resource="location" />} />
            <Route path="/episodes" exact render={() => <EpisodesList resource="episode" />} />
            <Route path="/episodes/:id" exact render={() => <EpisodeDetail resource="episode" id={1} />} />
          </Switch>
      </BrowserRouter>

    </>
  );
};

export default Menu;