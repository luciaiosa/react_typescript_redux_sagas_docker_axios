import { ActionTypes } from '../../enums/actionTypes';
import api from "../../apis/rick_morty";
import { Dispatch } from 'redux';

// I'll export these interfaces to use them into the reducers!!!
export interface Character {
  id: number;
  name: string;
  gender: string;
  url: string;
}

export interface GetCharactersAction {
  type: ActionTypes.getCharacters;
  payload: Character[];
}

export const getCharacters = () => async (dispatch: Dispatch) => {
  const response = await api.get<Character[]>("/character");
  dispatch<GetCharactersAction>({ type: ActionTypes.getCharacters, payload: response.data });
};