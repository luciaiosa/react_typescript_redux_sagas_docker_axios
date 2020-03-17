import { ActionTypes } from "../../enums/actionTypes";
import axios_instance from "../../apis/rick_morty";
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

export interface GetEpisodeAction {
  type: ActionTypes.getEpisode;
  payload: Episode;
}

// GET EPISODES
export const getEpisodes = () => async (dispatch: Dispatch) => {
    const response = await axios_instance.get<Episode[]>("/episode");
    dispatch<GetEpisodesAction>({ type: ActionTypes.getEpisodes, payload: response.data });
  };
  
  // GET EPISODE BY ID
  export const getEpisode = (id: number) => async (dispatch: Dispatch) => {
    const response = await axios_instance.get<Episode>(`/episode/${id}`);
    dispatch<GetEpisodeAction>({ type: ActionTypes.getEpisode, payload: response.data });
  };