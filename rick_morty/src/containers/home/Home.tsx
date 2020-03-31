import React, { FunctionComponent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBreadcrumbs } from "../../store/app";
import { styles } from "../../styles/DescriptionStyles";
import Carousel from "../../components/carousel/Carousel";
import { slides } from "../../constants/HomeSlides";

const Home: FunctionComponent = () => {
    const classes = styles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setBreadcrumbs([]));
    }, [dispatch]);

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
                <Carousel slides={slides} timer={3000}></Carousel>
            </div>
        </div>
    );
};

export default Home;
