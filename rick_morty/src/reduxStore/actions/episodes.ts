import { ActionTypes } from "../../enums/actionTypes";
import api from "../../apis/rick_morty";
import { Dispatch } from 'redux';

export interface Episode {
  id: number;
  name: string;
  air_date: Date;
  url: string;
}
// I'll export these interfaces to use them into the reducers!!!
export interface GetEpisodesAction {
  type: ActionTypes.getEpisodes;
  payload: Episode[];
}

export const getEpisodes = () => async (dispatch: Dispatch) => {
  const response = await api.get<Episode[]>("/episode");
  dispatch<GetEpisodesAction>({ type: ActionTypes.getEpisodes, payload: response.data });
};
