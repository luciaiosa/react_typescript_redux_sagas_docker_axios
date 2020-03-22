import { ActionTypes } from '../../enums/actionTypes';

// Set getLocations dispatch action a type:
export interface GetLocationsAction {
  type: ActionTypes.getLocations;
  payload: Location[];
}

export interface GetLocationAction {
  type: ActionTypes.getLocation;
  payload: Location;
}
