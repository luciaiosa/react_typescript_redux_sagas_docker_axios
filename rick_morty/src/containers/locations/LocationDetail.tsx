import React, { FunctionComponent, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
    locationByIdRequest,
    LocationStore,
    clearLocationSelected
} from "../../store/locations";
import { AppStore, BreadCrumb } from "../../store/app/AppStore";
import { setBreadcrumbs } from "../../store/app";
import { styles } from "../../styles/DescriptionStyles";
import image from "../../assets/last_episode.png";

type TParams = { id: string };

const LocationDetail: FunctionComponent<RouteComponentProps<TParams>> = (
    props
): JSX.Element => {
    const classes = styles();
    const dispatch = useDispatch();

    const { selectedLocation } = useSelector<AppStore, LocationStore>(
        state => state.locationStore
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
                key: "LocationsList",
                label: "Location List",
                link: "/locations"
            },
            {
                key: "LocationDetail",
                label: "Location Info",
                link: null
            }
        ];
        dispatch(setBreadcrumbs(breadCrumbs));
        dispatch(locationByIdRequest(parseInt(params.id)));
        //ComponentWillUnMount()
        return () => {
            dispatch(clearLocationSelected());
        };
    }, [dispatch]);

    const renderContent = () => {
        if (selectedLocation !== undefined) {
            return (
                <div className={classes.root}>
                    <div className={classes.container}>
                        <div className={classes.content}>
                            <h2>{selectedLocation.name}</h2>
                            <div>
                                <div className={classes.descriptionRow}>
                                    <img
                                        width={600}
                                        height={400}
                                        src={image}
                                        alt="location"
                                    />
                                </div>
                                <div className={classes.descriptionRow}>
                                    <p className={classes.description}>
                                        Id: {selectedLocation.id} - created:{" "}
                                        {selectedLocation.created}
                                    </p>
                                </div>
                                <div className={classes.descriptionRow}>
                                    <p className={classes.description}>
                                        Type: {selectedLocation.type}
                                    </p>
                                </div>
                                <div className={classes.descriptionRow}>
                                    <p className={classes.description}>
                                        Dimension: {selectedLocation.dimension}
                                    </p>
                                </div>
                                <div className={classes.descriptionRow}>
                                    <p className={classes.description}>
                                        Url: {selectedLocation.url}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return <div className={classes.blankDiv}>&nbsp;</div>;
    };
    return <div className={classes.root}>{renderContent()}</div>;
};

export default LocationDetail;
