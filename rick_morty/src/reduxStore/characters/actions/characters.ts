import { ActionTypes } from '../../enums/actionTypes';
import api from "../../apis/rick_morty";
import { Dispatch } from 'redux';
import { GetCharactersAction, GetCharacterAction } from '../actionsInterfaces/characters';
import { Character } from '../modelsInterfaces';

export const getCharacters = () => async (dispatch: Dispatch) => {
  const response = await api.get<Character[]>("/character");
  dispatch<GetCharactersAction>({ type: ActionTypes.getCharacters, payload: response.data });
};

export const getCharacter = (id: number) => async (dispatch: Dispatch) => {
  const response = await api.get<Character>(`/character/{id}`);
  dispatch<GetCharacterAction>({ type: ActionTypes.getCharacter, payload: id });
};