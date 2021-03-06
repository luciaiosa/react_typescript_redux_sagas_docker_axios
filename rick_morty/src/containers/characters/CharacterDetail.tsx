import React, { FunctionComponent, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
    characterByIdRequest,
    CharacterStore,
    clearCharacterSelected
} from "../../store/characters";
import { AppStore, BreadCrumb } from "../../store/app/AppStore";
import { setBreadcrumbs } from "../../store/app";
import { styles } from "../../styles/DescriptionStyles";
import Error from "../../components/error/Error";
import {formattedDate} from '../../utils/dates';

type TParams = { id: string };

const CharacterDetail: FunctionComponent<RouteComponentProps<TParams>> = (
    props
): JSX.Element => {
    const classes = styles();
    const dispatch = useDispatch();

    const { selectedCharacter, hasError, errorMessage } = useSelector<
        AppStore,
        CharacterStore
    >(state => state.characterStore);

    useEffect(() => {
        const { params } = props.match;
        const breadCrumbs: BreadCrumb[] = [
            {
                key: "Home",
                label: "Home",
                link: "/"
            },
            {
                key: "CharacterList",
                label: "Characters",
                link: "/characters"
            },
            {
                key: "CharacterDetail",
                label: "Character Info",
                link: null
            }
        ];
        dispatch(setBreadcrumbs(breadCrumbs));
        dispatch(characterByIdRequest(parseInt(params.id)));
        //ComponentWillUnMount()
        return () => {
            dispatch(clearCharacterSelected());
        };
    }, [dispatch]);

    const renderContent = (): JSX.Element => {
        if (hasError) {
            return <Error title={errorMessage}></Error>;
        }
        if (selectedCharacter !== undefined) {
            return (
                <div className={classes.content}>
                    <h2>{selectedCharacter.name}</h2>
                    <div>
                        <div className={classes.descriptionRow}>
                            <img
                                width={500}
                                height={300}
                                src={selectedCharacter.image}
                                alt="character"
                            />
                        </div>
                        <div className={classes.descriptionRow}>
                            <p className={classes.description}>
                                Id: {selectedCharacter.id} - created:{" "}
                                {formattedDate(selectedCharacter.created)}
                            </p>
                        </div>
                        <div className={classes.descriptionRow}>
                            <p className={classes.description}>
                                Status: {selectedCharacter.status}
                            </p>
                        </div>
                        <div className={classes.descriptionRow}>
                            <p className={classes.description}>
                                Species: {selectedCharacter.species}
                            </p>
                        </div>
                        <div className={classes.descriptionRow}>
                            <p className={classes.description}>
                                Gender: {selectedCharacter.gender}
                            </p>
                        </div>
                    </div>
                </div>
            );
        }
        return <div className={classes.blankDiv}>&nbsp;</div>;
    };

    return (
        <div className={classes.root}>
            <div className={classes.container}>{renderContent()}</div>
        </div>
    );
};

export default CharacterDetail;
