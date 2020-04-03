import React, { FunctionComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../../containers/home/Home";
import CharactersList from "../../containers/characters/CharacterList";
import EpisodesList from "../../containers/episodes/EpisodeList";
import LocationsList from "../../containers/locations/LocationList";
import CharacterDetail from "../../containers/characters/CharacterDetail";
import EpisodeDetail from "../../containers/episodes/EpisodeDetail";
import LocationDetail from "../../containers/locations/LocationDetail";
import CharactersComparation from "../../containers/characters/CharactersComparation";
import CharactersHistory from "../../containers/characters/CharactersHistory";
import Error from "../error/Error";

const Routing: FunctionComponent = () => {
    return (
        <BrowserRouter>
            {/* Switch mira todas las rutas, y solo va a mostrar la primera ruta que encuentra que coincide con el path */}
            <Switch>
                {/* <Route path="/characters" exact component={CharactersList} />
                            If I want to pass a prop to the component, instead of using component, I'll use the render prop. 
                            render accepts a functional component and that function won’t get unnecessarily remounted like with component. 
                            <Route path="/episodes/:id" exact render={() => <EpisodeDetail resource="episode" id={1} />}
                            That function will also receive all the same props that component would receive. So I can pass props along to the rendered component. */}
                <Route path="/" exact component={Home} />
                <Route path="/characters" exact component={CharactersList} />
                <Route path="/episodes" exact component={EpisodesList} />
                <Route path="/locations" exact component={LocationsList} />
                <Route
                    path="/characters/:id"
                    exact
                    component={CharacterDetail}
                />
                <Route path="/episodes/:id" exact component={EpisodeDetail} />
                <Route path="/locations/:id" exact component={LocationDetail} />
                <Route
                    path="/compare-characters"
                    exact
                    component={CharactersComparation}
                />
                <Route
                    path="/characters-history"
                    exact
                    component={CharactersHistory}
                />
                <Route path="/404" exact component={Error} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routing;
