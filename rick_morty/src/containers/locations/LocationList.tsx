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
import { styles } from "../../styles/ListsStyles";
import Pagination from "../../components/pagination/Pagination";
import image from "../../assets/first_episode.png";
import Error from "../../components/error/Error";
import {formattedDate} from '../../utils/dates';

const LocationsList: FunctionComponent = (): JSX.Element => {
    const classes = styles();
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);

    const { locations, pages, hasError, errorMessage } = useSelector<
        AppStore,
        LocationStore
    >(state => state.locationStore);
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
        dispatch(locationsRequest(currentPage));
        dispatch(setBreadcrumbs(breadCrumbs));
    }, []);

    const onSearchBarTerm = () => {
        dispatch(locationsRequest(currentPage, searchTerm));
    };

    const onSearchBarValueChange = (value: string) => {
        setSearchTerm(value);
    };

    const onCurrentPageChange = (value: number) => {
        setCurrentPage(value);
        dispatch(locationsRequest(value, searchTerm));
    };

    const pageNumbers = (): Array<number> => {
        const pageNumbers = [];
        for (let i = 1; i <= pages; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    const renderList = (): JSX.Element[] => {
        return locations.map((location: Location, index: number) => {
            return (
                <GridListTile key={index}>
                    <img src={image} alt={location.name} />
                    <Link to={`/locations/${location.id}`}>
                        <GridListTileBar
                            title={location.name}
                            subtitle={
                                <span>
                                    id: {location.id} - created:{" "}
                                    {formattedDate(location.created)}
                                </span>
                            }
                        />
                    </Link>
                </GridListTile>
            );
        });
    };

    const renderPagination = (): JSX.Element => {
        if (pages > 1) {
            return (
                <Pagination
                    pageNumbers={pageNumbers()}
                    currentPage={currentPage}
                    pageSelected={(value: number) => onCurrentPageChange(value)}
                ></Pagination>
            );
        }
        return <div></div>;
    };
    const renderContent = (): JSX.Element => {
        if (hasError) {
            return <Error title={errorMessage}></Error>;
        }
        return (
            <div>
                <GridList
                    cellHeight={230}
                    cols={4}
                    className={classes.gridList}
                >
                    {renderList()}
                </GridList>
                {renderPagination()}
            </div>
        );
    };

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.pageHeader}>
                    <h2 className={classes.pageHeaderTitle}>Locations list</h2>
                    <SearchBar
                        searchTerm={searchTerm}
                        onSearchValueChange={value =>
                            onSearchBarValueChange(value)
                        }
                        onSubmitSearch={() => onSearchBarTerm()}
                    />
                </div>
                {renderContent()}
            </div>
        </div>
    );
};

export default LocationsList;
