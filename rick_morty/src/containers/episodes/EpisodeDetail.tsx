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
import { styles } from "./EpisodeStyles";

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
                <div>
                    <h2>{selectedEpisode.name}</h2>
                    <div className="content">
                        <div className="description">
                            Id: {selectedEpisode.id} - created{" "}
                            {selectedEpisode.created}
                        </div>
                        <div className="description">
                            Air date: {selectedEpisode.air_date}
                        </div>
                        <div className="description">
                            Episode: {selectedEpisode.episode}
                        </div>
                        <div className="description">
                            Url: {selectedEpisode.url}
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
