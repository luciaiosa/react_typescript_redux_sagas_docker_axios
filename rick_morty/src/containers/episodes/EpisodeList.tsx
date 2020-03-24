import React, { FunctionComponent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { episodesRequest, EpisodeStore, Episode } from "../../store/episodes";
import { AppStore, BreadCrumb } from "../../store/app/AppStore";
import { setBreadcrumbs } from "../../store/app";
import SearchBar from "../../components/search-bar/SearchBar";
import image from "../../assets/episodes.jpeg";
import { styles } from "./EpisodeStyles";

const EpisodesList: FunctionComponent = (): JSX.Element => {
    const classes = styles();
    const [searchTerm, setSearchTerm] = useState<string>("");
    const { episodes } = useSelector<AppStore, EpisodeStore>(
        state => state.episodeStore
    );
    const dispatch = useDispatch();
    const breadCrumbs: BreadCrumb[] = [
        {
            key: "Home",
            label: "Home",
            link: "/"
        },
        {
            key: "EpisodeList",
            label: "Episodes List",
            link: null
        }
    ];
    useEffect(() => {
        dispatch(episodesRequest());
        dispatch(setBreadcrumbs(breadCrumbs));
    }, []);

    const onSearchBarTerm = () => {
        dispatch(episodesRequest(searchTerm));
    };

    const onSearchBarValueChange = (value: string) => {
        setSearchTerm(value);
    };

    const renderList = (): JSX.Element[] => {
        return episodes.map((tile: Episode) => {
            return (
                <GridListTile key={tile.episode}>
                    <img src={image} alt={tile.name} />
                    <Link to={`/episode/${tile.id}`} className="header">
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
                    <h2>Episodes list</h2>
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

export default EpisodesList;
