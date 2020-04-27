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
import Error from "../../components/error/Error";
import {formattedDate} from '../../utils/dates';

const CharactersComparation: FunctionComponent = (): JSX.Element => {
    const classes = styles();

    const { selectedCharactersToCompare, hasError, errorMessage } = useSelector<
        AppStore,
        CharacterStore
    >(state => state.characterStore);

    const [
        showDuplicatedCharactersErrorMessage,
        setShowDuplicatedCharactersErrorMessage
    ] = useState(false);
    const [showMaxLengthErrorMessage, setShowMaxLengthErrorMessage] = useState(
        false
    );

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
        switch (selectedCharactersToCompare.length) {
            case 0:
                dispatch(characterByIdToCompareRequest(characterId));
                break;
            case 2:
                setShowDuplicatedCharactersErrorMessage(false);
                setShowMaxLengthErrorMessage(true);
                break;
            default:
                selectedCharactersToCompare.map((character: Character) => {
                    if (character.id != characterId) {
                        dispatch(characterByIdToCompareRequest(characterId));
                        setShowDuplicatedCharactersErrorMessage(false);
                        setShowMaxLengthErrorMessage(false);
                    } else {
                        setShowDuplicatedCharactersErrorMessage(true);
                        setShowMaxLengthErrorMessage(false);
                    }
                });
                break;
        }
    };

    const onCharacterRemove = (characterId: number) => {
        dispatch(removeCharacterToCompare(characterId));
        setShowDuplicatedCharactersErrorMessage(false);
        setShowMaxLengthErrorMessage(false);
    };

    const renderMaxLengthErrorMessage = () => {
        if (showMaxLengthErrorMessage) {
            return (
                <div className={classes.errorMessage}>
                    Sorry, you only can compare two characters at the same time.
                </div>
            );
        }
        return null;
    };
    const renderDuplicatedCharactersErrorMessage = () => {
        if (showDuplicatedCharactersErrorMessage) {
            return (
                <div className={classes.errorMessage}>
                    Sorry, you can't select the same character twice.
                </div>
            );
        }
        return null;
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
                                    {formattedDate(character.created)}
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
    const renderContent = (): JSX.Element => {
        if (hasError) {
            return <Error title={errorMessage}></Error>;
        }
        return (
            <div>
                <div className={classes.content}>
                    <p className={classes.description}>
                        You can compare only two characters at the same time.
                        Select them from the list! You can remove one or both,
                        and select them again.
                    </p>
                </div>
                {renderMaxLengthErrorMessage()}
                {renderDuplicatedCharactersErrorMessage()}
                <GridList
                    spacing={10}
                    cellHeight={230}
                    cols={2}
                    className={classes.comparisonContainer}
                >
                    {renderList()}
                </GridList>
            </div>
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
                {renderContent()}
            </div>
        </div>
    );
};

export default CharactersComparation;
