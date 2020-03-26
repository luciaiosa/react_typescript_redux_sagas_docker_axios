import React, { FunctionComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CustomBreadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import CharactersList from "../characters/CharacterList";
import { useSelector } from "react-redux";
import { AppStore } from "../../store/app/AppStore";
import Home from "../home/Home";
import Spinner from "../../components/spinner/Spinner";
import literals from "../../resources/literals.json";
import { Container } from "@material-ui/core";
import CharacterDetail from "../characters/CharacterDetail";
import EpisodesList from "../episodes/EpisodeList";
import LocationsList from "../locations/LocationList";
import EpisodeDetail from "../episodes/EpisodeDetail";
import LocationDetail from "../locations/LocationDetail";

// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
// Link is the replacement for anchor tags.
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.

const App: FunctionComponent = () => {
    const { breadcrumbs, loading } = useSelector<AppStore, AppStore>(
        state => state
    );
    return (
        <div style={{ minHeight: "100vh" }}>
            {loading ? <Spinner message={literals.loadingMessage} /> : null}
            <BrowserRouter>
                <Container maxWidth="lg">
                    <Header>
                        <CustomBreadcrumbs items={breadcrumbs} />
                    </Header>

                    {/* Switch mira todas las rutas, y solo va a mostrar la primera ruta que encuentra que coincide con el path */}
                    <Switch>
                        {/* <Route path="/characters" exact component={CharactersList} />
                            I want to pass a prop to the component, so instead of using component, I'll use the render prop. 
                            render accepts a functional component and that function won’t get unnecessarily remounted like with component. 
                            That function will also receive all the same props that component would receive. So I can pass props along to the rendered component. */}
                        <Route path="/" exact component={Home} />
                        <Route
                            path="/characters"
                            exact
                            component={CharactersList}
                        />
                        <Route
                            path="/episodes"
                            exact
                            component={EpisodesList}
                        />
                        <Route
                            path="/locations"
                            exact
                            component={LocationsList}
                        />
                        <Route
                            path="/characters/:id"
                            exact
                            component={CharacterDetail}
                        />
                        <Route
                            path="/episodes/:id"
                            exact
                            component={EpisodeDetail}
                        />
                        <Route
                            path="/locations/:id"
                            exact
                            component={LocationDetail}
                        />

                        {/* <Route path="/episodes/:id" exact render={() => <EpisodeDetail resource="episode" id={1} />} /> */}
                    </Switch>
                </Container>
                <Footer copyright="❮❯ by Opinno 2020" />
            </BrowserRouter>
        </div>
    );
};

export default App;
