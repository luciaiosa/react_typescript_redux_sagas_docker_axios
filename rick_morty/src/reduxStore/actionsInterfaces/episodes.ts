import { ActionTypes } from "../../enums/actionTypes";
import { Episode } from "../modelsInterfaces";

export interface GetEpisodesAction {
  type: ActionTypes.getEpisodes;
  payload: Episode[];
}

export interface GetEpisodeAction {
  type: ActionTypes.getEpisode;
  payload: Episode;
}