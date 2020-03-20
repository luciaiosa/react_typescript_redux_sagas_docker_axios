import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Header from '../../components/header/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import { MENU_ITEMS } from '../../constants/MenuItems';
import CharactersList from '../../containers/characters/CharactersList';
import LocationsList from '../../containers/locations/LocationsList';
import EpisodesList from '../../containers/episodes/EpisodesList';
import EpisodeDetail from '../../containers/episodes/EpisodeDetail';
import Button from '../../components/components-ui/Button';
import './App.css';

// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
// Link is the replacement for anchor tags.
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.

const App = () => {

    return (
        <div className="ui container">
            <BrowserRouter >
                <Header>
                    <Breadcrumbs>
                        {MENU_ITEMS.map(({ to, label }) => (
                            <Link key={to} to={to} className="link">{label}</Link>
                        ))}
                    </Breadcrumbs>
                </Header>
                <div>
                    <h2>Welcome to Rick and Morty page!</h2>
                    <Link to="/characters"><Button>Go to Characters List</Button></Link>
                    <Link to="/locations"><Button>Go to Locations List</Button></Link>
                    <Link to="/episodes"><Button>Go to Episodes List</Button></Link>
                </div>
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
            <Footer content="❮❯ by Opinno 2020" />
        </div>
    )
}

export default App;