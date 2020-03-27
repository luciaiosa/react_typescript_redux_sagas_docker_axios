import React, { FunctionComponent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBreadcrumbs } from "../../store/app";
import charactersImage from "../../assets/characters.jpeg";
import episodesImage from "../../assets/episodes.jpeg";
import locationsImage from "../../assets/location.jpeg";
import { styles } from "../../styles/DescriptionStyles";
import Carousel from "../../components/carousel/Carousel";

// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
// Link is the replacement for anchor tags.
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.

const Home: FunctionComponent = () => {
    const classes = styles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setBreadcrumbs([]));
    }, [dispatch]);

    const slides = [
        {
            image: {
                source: charactersImage,
                alt: "characters"
            },
            linkUrl: "/characters",
            title: "Go to Characters list",
            subtitle: "See our characters list!"
        },
        {
            image: {
                source: episodesImage,
                alt: "episodes"
            },
            linkUrl: "/episodes",
            title: "Go to Episodes list",
            subtitle: "See our episodes list!"
        },
        {
            image: {
                source: locationsImage,
                alt: "locations"
            },
            linkUrl: "/locations",
            title: "Go to locations list",
            subtitle: "See our locations list!"
        }
    ];
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.content}>
                    <h2>Welcome to Rick and Morty page!</h2>
                    <p className={classes.description}>
                        Rick and Morty is a television show. <br />
                        The American animated television show is created by
                        Justin Roiland and Dan Harmon. It premiered on Cartoon
                        Network's [adult swim] block on December 2, 2013. <br />
                        Here you have access to about hundreds of characters,
                        images, locations and episodes. This page is filled with
                        canonical information as seen on the TV show. <br />
                        Season 4 characters, locations and episodes are coming
                        soon!
                    </p>
                </div>
                <Carousel slides={slides}></Carousel>
            </div>
        </div>
    );
};

export default Home;
