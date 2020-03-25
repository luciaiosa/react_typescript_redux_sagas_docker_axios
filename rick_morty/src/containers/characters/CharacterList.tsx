import React, { FunctionComponent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import {
    charactersRequest,
    CharacterStore,
    Character
} from "../../store/characters";
import { AppStore, BreadCrumb } from "../../store/app/AppStore";
import { setBreadcrumbs } from "../../store/app";
import SearchBar from "../../components/search-bar/SearchBar";
import { styles } from "./CharacterStyles";

const CharactersList: FunctionComponent = (): JSX.Element => {
    const classes = styles();
    const [searchTerm, setSearchTerm] = useState<string>("");
    const { characters } = useSelector<AppStore, CharacterStore>(
        state => state.characterStore
    );
    const dispatch = useDispatch();
    const breadCrumbs: BreadCrumb[] = [
        {
            key: "Home",
            label: "Home",
            link: "/"
        },
        {
            key: "CharacterList",
            label: "Character List",
            link: null
        }
    ];
    useEffect(() => {
        dispatch(charactersRequest());
        dispatch(setBreadcrumbs(breadCrumbs));
    }, []);

    const onSearchBarTerm = () => {
        dispatch(charactersRequest(searchTerm));
    };

    const onSearchBarValueChange = (value: string) => {
        setSearchTerm(value);
    };

    const renderList = (): JSX.Element[] => {
        return characters.map((tile: Character) => {
            return (
                <GridListTile key={tile.id}>
                    <img src={tile.image} alt={tile.name} />
                    <Link to={`/characters/${tile.id}`} className="header">
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
                    <h2>Characters list</h2>
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

export default CharactersList;