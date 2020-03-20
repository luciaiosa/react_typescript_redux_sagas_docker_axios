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

export interface GetCharacterAction {
  type: ActionTypes.getCharacter;
  payload: number;
}

export const getCharacters = () => async (dispatch: Dispatch) => {
  const response = await api.get<Character[]>("/character");
  dispatch<GetCharactersAction>({ type: ActionTypes.getCharacters, payload: response.data });
};

export const getCharacter = (id: number) => async (dispatch: Dispatch) => {
  const response = await api.get<Character>(`/character/{id}`);
  dispatch<GetCharacterAction>({ type: ActionTypes.getCharacter, payload: id });
};