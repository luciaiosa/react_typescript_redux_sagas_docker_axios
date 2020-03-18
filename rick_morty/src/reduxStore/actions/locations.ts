import { ActionTypes } from '../../enums/actionTypes';
import api from "../../apis/rick_morty";
import { Dispatch } from 'redux';

// I'll export these interfaces to use them into the reducers!!!
export interface Location {
  id: number;
  name: string;
  type: string;
  url: string;
}

// Set getLocations dispatch action a type:
export interface GetLocationsAction {
  type: ActionTypes.getLocations;
  payload: Location[];
}

// Async action creator, so I'll use saga!!
// I use Typescript, so I have to put dispatch (a function with params, and these params have types) a type!! There is a dispatch type in redux, so I use it!
export const getLocations = () => async (dispatch: Dispatch) => {
  // returns a function that receives dispatch as prop!!
  // axios.get() returns an array of Locations!!
  const response = await api.get<Location[]>("/location");
  // type in typescript = type of an object or a property or a function
  // type in redux = type that an action object has
  // dispatch is a generic function, so I can pass in an interface that describes the argument that I espect to be passed into dispatch, GetLocationsAction
  dispatch<GetLocationsAction>({ type: ActionTypes.getLocations, payload: response.data });
};
