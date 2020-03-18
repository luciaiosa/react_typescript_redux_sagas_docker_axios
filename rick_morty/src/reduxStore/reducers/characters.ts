import { ActionTypes, Action } from "../../enums/actionTypes";
import {StoreState, DefaultStoreState} from '../reducers';


export default (state: StoreState = DefaultStoreState, action: Action): StoreState => {
    switch (action.type) {
        case ActionTypes.getCharacters:
            return {...state, characters: action.payload};
        default:
            return state;
    }
}