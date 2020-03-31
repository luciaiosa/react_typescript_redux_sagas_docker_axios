import React, { FunctionComponent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Close } from "@material-ui/icons";
import CharactersSelect from "../../components/simple-select/CharactersSelect";
import {
    charactersRequest,
    CharacterStore,
    Character,
    removeCharacterToCompare,
    characterByIdToCompareRequest
} from "../../store/characters";
import { AppStore, BreadCrumb } from "../../store/app/AppStore";
import { setBreadcrumbs } from "../../store/app";
import { styles } from "../../styles/ListsStyles";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";

const CharactersComparation: FunctionComponent = (): JSX.Element => {
    const classes = styles();

    const { selectedCharactersToCompare } = useSelector<
        AppStore,
        CharacterStore
    >(state => state.characterStore);

    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const dispatch = useDispatch();
    const breadCrumbs: BreadCrumb[] = [
        {
            key: "Home",
            label: "Home",
            link: "/"
        },
        {
            key: "CharactersList",
            label: "Characters",
            link: "/characters"
        },
        {
            key: "CharactersComparation",
            label: "Compare",
            link: null
        }
    ];
    useEffect(() => {
        dispatch(charactersRequest(1));
        dispatch(setBreadcrumbs(breadCrumbs));
    }, []);

    const onCharacterSelect = (characterId: number) => {
        if (selectedCharactersToCompare.length < 2) {
            dispatch(characterByIdToCompareRequest(characterId));
        } else {
            setShowErrorMessage(true);
        }
    };

    const onCharacterRemove = (characterId: number) => {
        dispatch(removeCharacterToCompare(characterId));
        setShowErrorMessage(false);
    };

    const renderErrorMessage = () => {
        if (showErrorMessage) {
            return (
                <div className={classes.errorMessage}>
                    Sorry, you only can compare two characters at the same time.
                </div>
            );
        }
        return <div className={classes.blankDiv}>&nbsp;</div>;
    };

    const renderList = (): JSX.Element[] => {
        return selectedCharactersToCompare.map(
            (character: Character, index: number) => {
                return (
                    <GridListTile key={index} className={classes.characterItem}>
                        <div className={classes.listTileContainer}>
                            <div className={classes.descriptionRow}>
                                <div>
                                    <h3>{character.name}</h3>
                                </div>
                                <div
                                    onClick={() =>
                                        onCharacterRemove(character.id)
                                    }
                                >
                                    <Close name="close" />
                                </div>
                            </div>
                            <div className={classes.descriptionRow}>
                                <p className={classes.description}>
                                    Id: {character.id} - created:{" "}
                                    {character.created}
                                </p>
                            </div>
                            <div className={classes.descriptionRow}>
                                <p className={classes.description}>
                                    Status: {character.status}
                                </p>
                            </div>
                            <div className={classes.descriptionRow}>
                                <p className={classes.description}>
                                    Species: {character.species}
                                </p>
                            </div>
                            <div className={classes.descriptionRow}>
                                <p className={classes.description}>
                                    Gender: {character.gender}
                                </p>
                            </div>
                        </div>
                        <GridListTileBar title={character.name} />
                    </GridListTile>
                );
            }
        );
    };

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.pageHeader}>
                    <h2 className={classes.pageHeaderTitle}>
                        Compare Characters
                    </h2>
                    <CharactersSelect
                        onSelect={value => onCharacterSelect(value)}
                    ></CharactersSelect>
                </div>
                <div className={classes.content}>
                    <p className={classes.description}>
                        You can compare only two characters at the same time.
                        Select them from the list! You can remove one or both,
                        and select them again.
                    </p>
                </div>
                {renderErrorMessage()}
                <GridList
                    spacing={10}
                    cellHeight={230}
                    cols={2}
                    className={classes.gridList}
                >
                    {renderList()}
                </GridList>
            </div>
        </div>
    );
};

export default CharactersComparation;
