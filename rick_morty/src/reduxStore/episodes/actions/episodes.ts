import { ActionTypes } from "../../enums/actionTypes";
import api from "../../apis/rick_morty";
import { Dispatch } from 'redux';
import { GetEpisodesAction } from "../actionsInterfaces/episodes";
import { Episode } from "../modelsInterfaces";

export const getEpisodes = () => async (dispatch: Dispatch) => {
  const response = await api.get<Episode[]>("/episode");
  dispatch<GetEpisodesAction>({ type: ActionTypes.getEpisodes, payload: response.data });
};
