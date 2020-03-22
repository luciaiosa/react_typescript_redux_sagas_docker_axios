import { ActionTypes } from '../../enums/actionTypes';
import { Character } from '../modelsInterfaces';

export interface GetCharactersAction {
  type: ActionTypes.getCharacters;
  payload: Character[];
}

export interface GetCharacterAction {
  type: ActionTypes.getCharacter;
  payload: number;
}
