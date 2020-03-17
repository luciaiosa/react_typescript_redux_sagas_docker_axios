import _ from "lodash";
// I'll use Lodash methods to work with objects
import {
    GET_EPISODES,
    GET_EPISODE
} from "../../constants/storeActionTypes";

export default (state = {}, action) => {
    switch (action.type) {
        case GET_EPISODES:
            /* De la request a la API llega un array de objetos, y lo tengo que convertir a un objeto!!
             El estado del redux store es un objeto!!

             mapKeys es una función de lodash que recibe un array y devuelve un objeto.
             Las keys del nuevo objeto se cogen de cada registro individual del array.
             Se le pasan como params: el listado de episodes que le llega desde la API,
             y el "id", que significa que el id será el key para el nuevo registro (objeto) creado desde el array */
            return { ...state, ..._.mapKeys(action.payload, "id") };
        case GET_EPISODE:
            return {...state, [action.payload.id]: action.payload}
        default:
            return state;
    }
}