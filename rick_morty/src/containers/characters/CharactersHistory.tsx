import React, { FunctionComponent, useEffect, useState } from "react";
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
import Modal from "../../components/modal/Modal";

const CharactersHistory: FunctionComponent = (): JSX.Element => {
    const classes = styles();

    const [showModal, setShowModal] = useState(false);
    const [characterHistoryRemovedId, setcharacterHistoryRemovedId] = useState(
        0
    );

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
        setcharacterHistoryRemovedId(characterId);
        setShowModal(true);
    };
    const onCharacterRemoveConfirm = () => {
        setShowModal(false);
        dispatch(removeCharacterFromHistory(characterHistoryRemovedId));
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

    const renderModal = () => {
        if (showModal) {
            return (
                <Modal
                    title="Remove character history"
                    content="Are you sure that you want to remove the character history?"
                    action="Remove"
                    onDismiss={() => onCharacterRemoveConfirm()}
                ></Modal>
            );
        }
        return <div></div>;
    };

    return (
        <div className={classes.root}>
            {renderModal()}
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
