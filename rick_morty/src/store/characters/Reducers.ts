import {
    GETTING_CHARACTERS,
    GOT_CHARACTERS,
    GETTING_CHARACTER_BYID,
    GOT_CHARACTER_BYID,
    CLEAR_CHARACTER_SELECTED,
    GOT_CHARACTER_BYID_TO_COMPARE,
    REMOVE_CHARACTER_TO_COMPARE
} from "./Actions";
import { Reducer, AnyAction } from "redux";
import {
    InitialCharacterStore,
    CharacterStore,
    Character
} from "./CharacterStore";

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
        case GOT_CHARACTER_BYID_TO_COMPARE:
            return {
                ...state,
                loading: false,
                selectedCharactersToCompare: [
                    ...state.selectedCharactersToCompare,
                    action.payload
                ]
            };
        case REMOVE_CHARACTER_TO_COMPARE:
            return {
                ...state,
                selectedCharactersToCompare: [
                    ...state.selectedCharactersToCompare.filter(
                        (character: Character) =>
                            character.id !== action.payload
                    )
                ]
            };
        case CLEAR_CHARACTER_SELECTED:
            return { ...state, selectedCharacter: undefined };
        default:
            return state;
    }
};
