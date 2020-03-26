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
import { styles } from "./CharacterStyles";
import "./Character.css";

type TParams = { id: string };

const CharacterDetail: FunctionComponent<RouteComponentProps<TParams>> = (
    props
): JSX.Element => {
    const classes = styles();
    const dispatch = useDispatch();
    const { selectedCharacter } = useSelector<AppStore, CharacterStore>(
        state => state.characterStore
    );

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
                label: "Characters List",
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

    const renderContent = () => {
        if (selectedCharacter !== undefined) {
            return (
                <div className="card-container border-gray rounded border mx-2 my-3 d-flex flex-column align-items-center p-0 bg-light">
                    <h2>{selectedCharacter.name}</h2>
                    <div className="content">
                        <div className="description">
                            Id: {selectedCharacter.id} - created:{" "}
                            {selectedCharacter.created}
                        </div>
                        <div className="description">
                            Status: {selectedCharacter.status}
                        </div>
                        <div className="description">
                            Species: {selectedCharacter.species}
                        </div>
                        <div className="description">
                            Gender: {selectedCharacter.gender}
                        </div>
                    </div>
                </div>
            );
        }
        return <div>Character Not Found!</div>;
    };
    return <div className="col-sm-6 col-md-4 card">{renderContent()}</div>;
};

export default CharacterDetail;
