import React, { FunctionComponent, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
    episodeByIdRequest,
    EpisodeStore,
    clearEpisodeSelected
} from "../../store/episodes";
import { AppStore, BreadCrumb } from "../../store/app/AppStore";
import { setBreadcrumbs } from "../../store/app";
import { styles } from "../../styles/DescriptionStyles";
import image from "../../assets/first_episode.png";

type TParams = { id: string };

const EpisodeDetail: FunctionComponent<RouteComponentProps<TParams>> = (
    props
): JSX.Element => {
    const classes = styles();
    const dispatch = useDispatch();
    const { selectedEpisode } = useSelector<AppStore, EpisodeStore>(
        state => state.episodeStore
    );

    useEffect(() => {
        const { params } = props.match;
        const breadCrumbs: BreadCrumb[] = [
            {
                key: "Home",
                label: "Home",
                link: "/"
            },
            {
                key: "EpisodesList",
                label: "Episodes List",
                link: "/episodes"
            },
            {
                key: "EpisodeDetail",
                label: "Episode Info",
                link: null
            }
        ];
        dispatch(setBreadcrumbs(breadCrumbs));
        dispatch(episodeByIdRequest(parseInt(params.id)));
        //ComponentWillUnMount()
        return () => {
            dispatch(clearEpisodeSelected());
        };
    }, [dispatch]);

    const renderContent = () => {
        if (selectedEpisode !== undefined) {
            return (
                <div className={classes.root}>
                    <div className={classes.container}>
                        <div className={classes.content}>
                            <h2>{selectedEpisode.name}</h2>
                            <div>
                                <div className={classes.descriptionRow}>
                                    <img
                                        width={600}
                                        height={400}
                                        src={image}
                                        alt="episode"
                                    />
                                </div>
                                <div className={classes.descriptionRow}>
                                    <p className={classes.description}>
                                        Id: {selectedEpisode.id} - created:{" "}
                                        {selectedEpisode.created}
                                    </p>
                                </div>
                                <div className={classes.descriptionRow}>
                                    <p className={classes.description}>
                                        Air date: {selectedEpisode.air_date}
                                    </p>
                                </div>
                                <div className={classes.descriptionRow}>
                                    <p className={classes.description}>
                                        Episode: {selectedEpisode.episode}
                                    </p>
                                </div>
                                <div className={classes.descriptionRow}>
                                    <p className={classes.description}>
                                        Url: {selectedEpisode.url}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return <div>Episode Not Found!</div>;
    };
    return <div className={classes.root}>{renderContent()}</div>;
};

export default EpisodeDetail;
