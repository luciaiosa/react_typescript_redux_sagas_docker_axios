import React, { FunctionComponent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import {
    locationsRequest,
    LocationStore,
    Location
} from "../../store/locations";
import { AppStore, BreadCrumb } from "../../store/app/AppStore";
import { setBreadcrumbs } from "../../store/app";
import SearchBar from "../../components/search-bar/SearchBar";
import image from "../../assets/location.jpeg";
import { styles } from "./LocationStyles";

const LocationsList: FunctionComponent = (): JSX.Element => {
    const classes = styles();
    const [searchTerm, setSearchTerm] = useState<string>("");
    const { locations } = useSelector<AppStore, LocationStore>(
        state => state.locationStore
    );
    const dispatch = useDispatch();
    const breadCrumbs: BreadCrumb[] = [
        {
            key: "Home",
            label: "Home",
            link: "/"
        },
        {
            key: "LocationsList",
            label: "Locations List",
            link: null
        }
    ];
    useEffect(() => {
        dispatch(locationsRequest());
        dispatch(setBreadcrumbs(breadCrumbs));
    }, []);

    const onSearchBarTerm = () => {
        dispatch(locationsRequest(searchTerm));
    };

    const onSearchBarValueChange = (value: string) => {
        setSearchTerm(value);
    };

    const renderList = (): JSX.Element[] => {
        return locations.map((tile: Location) => {
            return (
                <GridListTile key={tile.id}>
                    <img src={image} alt={tile.name} />
                    <Link to={`/location/${tile.id}`} className="header">
                        <GridListTileBar
                            title={tile.name}
                            subtitle={
                                <span>
                                    id: {tile.id} - created: {tile.created}
                                </span>
                            }
                        />
                    </Link>
                </GridListTile>
            );
        });
    };

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.pageHeader}>
                    <h2>Locations list</h2>
                    <SearchBar
                        searchTerm={searchTerm}
                        onSearchValueChange={value =>
                            onSearchBarValueChange(value)
                        }
                        onSubmitSearch={() => onSearchBarTerm()}
                    />
                </div>
                <GridList
                    cellHeight={230}
                    cols={4}
                    className={classes.gridList}
                >
                    {renderList()}
                </GridList>
            </div>
        </div>
    );
};

export default LocationsList;
