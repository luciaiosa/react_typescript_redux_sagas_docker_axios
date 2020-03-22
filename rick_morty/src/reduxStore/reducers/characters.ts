import { ActionTypes, Action } from "../../enums/actionTypes";
import { CharacterStoreState, InitialCharacterStoreState } from "../storeStates";


export default (state: CharacterStoreState = InitialCharacterStoreState, action: Action): CharacterStoreState => {
    switch (action.type) {
        case ActionTypes.getCharacters:
            return { ...state, characters: action.payload };
        case ActionTypes.getCharacter:
            return {...state, selectedCharacter: state.characters.find(item => item.id === action.payload)};  // tengo que devolver el character con id= action.payload
        default:
            return state;
    }
}