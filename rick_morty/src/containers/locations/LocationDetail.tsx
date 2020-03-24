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
import { styles } from "./LocationStyles";

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
                <div>
                    <h2>{selectedLocation.name}</h2>
                    <div className="content">
                        <div className="description">
                            Id: {selectedLocation.id} - created{" "}
                            {selectedLocation.created}
                        </div>
                        <div className="description">
                            Type: {selectedLocation.type}
                        </div>
                        <div className="description">
                            Dimension: {selectedLocation.dimension}
                        </div>
                        <div className="description">
                            Url: {selectedLocation.url}
                        </div>
                    </div>
                </div>
            );
        }
        return <div>Location Not Found!</div>;
    };
    return <div className={classes.root}>{renderContent()}</div>;
};

export default LocationDetail;
