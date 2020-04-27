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
import Error from "../../components/error/Error";
import {formattedDate} from '../../utils/dates';

type TParams = { id: string };

const EpisodeDetail: FunctionComponent<RouteComponentProps<TParams>> = (
    props
): JSX.Element => {
    const classes = styles();
    const dispatch = useDispatch();
    const { selectedEpisode, hasError, errorMessage } = useSelector<
        AppStore,
        EpisodeStore
    >(state => state.episodeStore);

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
        if (hasError) {
            return <Error title={errorMessage}></Error>;
        }
        if (selectedEpisode !== undefined) {
            return (
                <div className={classes.content}>
                    <h2>{selectedEpisode.name}</h2>
                    <div>
                        <div className={classes.descriptionRow}>
                            <img
                                width={500}
                                height={300}
                                src={image}
                                alt="episode"
                            />
                        </div>
                        <div className={classes.descriptionRow}>
                            <p className={classes.description}>
                                Id: {selectedEpisode.id} - created:{" "}
                                {formattedDate(selectedEpisode.created)}
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
            );
        }
        return <div className={classes.blankDiv}>&nbsp;</div>;
    };
    return (
        <div className={classes.root}>
            <div className={classes.container}>{renderContent()}</div>
        </div>
    );
};

export default EpisodeDetail;
