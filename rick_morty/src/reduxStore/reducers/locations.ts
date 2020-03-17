import _ from "lodash";
// I'll use Lodash methods to work with objects
import { ActionTypes } from "../../enums/actionTypes";
import {Location, GetLocationsAction} from '../actions/locations';

// the state will have the type od locations array, with the default value an empty array!!
// the action will have the type GetLocationsAction created in actions/locations.ts !!
export default (state: Location[] = [], action: GetLocationsAction) => {
    switch (action.type) {
        case ActionTypes.getLocations:
            /* De la request a la API llega un array de objetos, y lo tengo que convertir a un objeto!!
             El estado del redux store es un objeto!!

             mapKeys es una función de lodash que recibe un array y devuelve un objeto.
             Las keys del nuevo objeto se cogen de cada registro individual del array.
             Se le pasan como params: el listado de locations que le llega desde la API,
             y el "id", que significa que el id será el key para el nuevo registro (objeto) creado desde el array */
            return { ...state, ..._.mapKeys(action.payload, "id"), loading: true };
        // action LOCATIONS_RECEIVED created in sagas.js
        // case LOCATIONS_RECEIVED:
        //         return { ...state, ..._.mapKeys(action.payload, "id"), loading: false }
        // case GET_LOCATION:
        //     return {...state, [action.payload.id]: action.payload}
        default:
            return state;
    }
}

// Use typescript with reducers!!!

// type State = {}
// type Action = { type: "GET_LOCATIONS"; payload: string }
//             | { type: "LOCATIONS_RECEIVED"; payload: number }
//             | { type: "GET_LOCATION"; payload: number };

// export default (state: State, action: Action): State => {



// OLD REDUCER: WITHOUT TYPESCRIPT

// export default (state = {}, action) => {
//     switch (action.type) {
//         case GET_LOCATIONS:
//             /* De la request a la API llega un array de objetos, y lo tengo que convertir a un objeto!!
//              El estado del redux store es un objeto!!

//              mapKeys es una función de lodash que recibe un array y devuelve un objeto.
//              Las keys del nuevo objeto se cogen de cada registro individual del array.
//              Se le pasan como params: el listado de locations que le llega desde la API,
//              y el "id", que significa que el id será el key para el nuevo registro (objeto) creado desde el array */
//             return { ...state, ..._.mapKeys(action.payload, "id"), loading: true };
//         // action LOCATIONS_RECEIVED created in sagas.js
//         case LOCATIONS_RECEIVED:
//                 return { ...state, ..._.mapKeys(action.payload, "id"), loading: false }
//         case GET_LOCATION:
//             return {...state, [action.payload.id]: action.payload}
//         default:
//             return state;
//     }
// }