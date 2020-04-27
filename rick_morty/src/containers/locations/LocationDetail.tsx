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
import Error from "../../components/error/Error";
import {formattedDate} from '../../utils/dates';

type TParams = { id: string };

const LocationDetail: FunctionComponent<RouteComponentProps<TParams>> = (
    props
): JSX.Element => {
    const classes = styles();
    const dispatch = useDispatch();

    const { selectedLocation, hasError, errorMessage } = useSelector<
        AppStore,
        LocationStore
    >(state => state.locationStore);

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
        if (hasError) {
            return <Error title={errorMessage}></Error>;
        }
        if (selectedLocation !== undefined) {
            return (
                <div className={classes.content}>
                    <h2>{selectedLocation.name}</h2>
                    <div>
                        <div className={classes.descriptionRow}>
                            <img
                                width={500}
                                height={300}
                                src={image}
                                alt="location"
                            />
                        </div>
                        <div className={classes.descriptionRow}>
                            <p className={classes.description}>
                                Id: {selectedLocation.id} - created:{" "}
                                {formattedDate(selectedLocation.created)}
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

export default LocationDetail;
