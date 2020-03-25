import {
    GETTING_CHARACTERS,
    GOT_CHARACTERS,
    GETTING_CHARACTER_BYID,
    GOT_CHARACTER_BYID,
    CLEAR_CHARACTER_SELECTED
} from "./Actions";
import { Reducer, AnyAction } from "redux";
import { InitialCharacterStore, CharacterStore } from "./CharacterStore";

export const characterStoreReducer: Reducer<CharacterStore, AnyAction> = (
    state = InitialCharacterStore,
    action
) => {
    switch (action.type) {
        case GETTING_CHARACTERS:
        case GETTING_CHARACTER_BYID:
            return { ...state, loading: true };
        case GOT_CHARACTERS:
            return {
                ...state,
                loading: false,
                characters: action.payload.results,
                pages: action.payload.info.pages
            };
        case GOT_CHARACTER_BYID:
            return {
                ...state,
                loading: false,
                selectedCharacter: action.payload
            };
        case CLEAR_CHARACTER_SELECTED:
            return { ...state, selectedCharacter: undefined };
        default:
            return state;
    }
};
