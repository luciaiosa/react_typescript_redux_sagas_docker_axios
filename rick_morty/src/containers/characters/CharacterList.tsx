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
import Pager from "../../components/pager/Pager";

const CharactersList: FunctionComponent = (): JSX.Element => {
    const classes = styles();
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);

    const { characters, pages } = useSelector<AppStore, CharacterStore>(
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
            label: "Characters List",
            link: null
        }
    ];
    useEffect(() => {
        dispatch(charactersRequest(currentPage));
        dispatch(setBreadcrumbs(breadCrumbs));
    }, []);

    const onSearchBarTerm = () => {
        dispatch(charactersRequest(currentPage, searchTerm));
    };

    const onSearchBarValueChange = (value: string) => {
        setSearchTerm(value);
    };

    const onCurrentPageChange = (value: number) => {
        setCurrentPage(value);
        dispatch(charactersRequest(value, searchTerm));
    };

    // const currentPageItems = () => {
    //     const lastItemIndex = currentPage * ITEMS_PER_PAGE;
    //     const firstItemIndex = lastItemIndex - ITEMS_PER_PAGE;
    //     return characters.slice(firstItemIndex, lastItemIndex);
    // };

    const pageNumbers = (): Array<number> => {
        const pageNumbers = [];
        for (let i = 1; i <= pages; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    const renderList = (): JSX.Element[] => {
        return characters.map((character: Character, index: number) => {
            return (
                <GridListTile key={index}>
                    <img src={character.image} alt={character.name} />
                    <Link to={`/characters/${character.id}`} className="header">
                        <GridListTileBar
                            title={character.name}
                            subtitle={
                                <span>
                                    id: {character.id} - created:{" "}
                                    {character.created}
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
                currentPage: {currentPage}
                <Pager
                    pageNumbers={pageNumbers()}
                    pageSelected={(value: number) => onCurrentPageChange(value)}
                ></Pager>
            </div>
        </div>
    );
};

export default CharactersList;
