import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegWindowClose } from "react-icons/fa";
import {
    CharacterStore,
    History,
    removeCharacterFromHistory
} from "../../store/characters";
import { AppStore, BreadCrumb } from "../../store/app/AppStore";
import { setBreadcrumbs } from "../../store/app";
import { styles } from "../../styles/ListsStyles";
import { Link } from "react-router-dom";

const CharactersHistory: FunctionComponent = (): JSX.Element => {
    const classes = styles();

    const { visitedCharactersHistory } = useSelector<AppStore, CharacterStore>(
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
            key: "CharactersHistory",
            label: "History",
            link: null
        }
    ];
    useEffect(() => {
        dispatch(setBreadcrumbs(breadCrumbs));
    }, []);

    const onCharacterRemove = (characterId: number) => {
        dispatch(removeCharacterFromHistory(characterId));
    };

    const renderList = () => {
        return visitedCharactersHistory.map(
            (historyItem: History, index: number) => (
                <div key={index}>
                    <div className={classes.historyDescriptionRow}>
                        <div>
                            <p className={classes.description}>
                                {historyItem.visitedAt.toLocaleDateString()}
                            </p>
                        </div>
                        <div>
                            <p className={classes.description}>
                                <Link to={historyItem.url}>
                                    {historyItem.characterName}
                                </Link>
                            </p>
                        </div>
                        <div
                            onClick={() =>
                                onCharacterRemove(historyItem.characterId)
                            }
                        >
                            <FaRegWindowClose name="close" />
                        </div>
                    </div>
                </div>
            )
        );
    };

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.pageHeader}>
                    <h2 className={classes.pageHeaderTitle}>
                        Characters History
                    </h2>
                </div>
                {renderList()}
            </div>
        </div>
    );
};

export default CharactersHistory;
