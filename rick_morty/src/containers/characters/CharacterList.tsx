import React, { FunctionComponent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {
    charactersRequest,
    CharacterStore,
    Character
} from "../../store/characters";
import { AppStore, BreadCrumb } from "../../store/app/AppStore";
import { setBreadcrumbs } from "../../store/app";
import SearchBar from "../../components/search-bar/SearchBar";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
            flexDirection: 'column'
        },
        gridList: {
            width: 800,
            height: 'auto',
        }
    }),
);

const CharactersList: FunctionComponent = (): JSX.Element => {
    const classes = useStyles();
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
                <GridListTile key={tile.image}>
                    <img src={tile.image} alt={tile.name} />
                    <Link
                        to={`/characters/${tile.id}`}
                        className="header"
                    >
                        <GridListTileBar

                            title={tile.name}
                            subtitle={<span>id: {tile.id} - created: {tile.created}</span>}
                        />
                    </Link>
                </GridListTile>
            )
        });

        // return characters.map((character: Character) => {
        //     return (
        //         <div key={character.id} className="item">
        //             <div className="content">
        // <Link
        //     to={`/characters/${character.id}`}
        //     className="header"
        // >
        //                     {character.name}
        //                 </Link>
        //                 <div className="description">
        //                     Id: {character.id} - created {character.created}
        //                 </div>
        //                 <div className="description">
        //                     Status: {character.status}
        //                 </div>
        //                 <div className="description">
        //                     Species: {character.species}
        //                 </div>
        //                 <div className="description">
        //                     Gender: {character.gender}
        //                 </div>
        //             </div>
        //         </div>
        //     );
        // });
    };

    return (
        <div className={classes.root}>
            <div>
                <h2>Characters list</h2>
                <SearchBar
                    searchTerm={searchTerm}
                    onSearchValueChange={value => onSearchBarValueChange(value)}
                    onSubmitSearch={() => onSearchBarTerm()}
                />
                <GridList cellHeight={180} className={classes.gridList}>
                    {renderList()}
                </GridList>
            </div>
        </div>
    );
};

export default CharactersList;
