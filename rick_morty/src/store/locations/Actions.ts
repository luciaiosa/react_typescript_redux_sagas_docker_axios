export const GET_LOCATIONS = "GET_LOCATIONS";
export const GOT_LOCATIONS = "GOT_LOCATIONS";
export const GET_LOCATION_BYID = "GET_LOCATION_BYID";
export const GOT_LOCATION_BYID = "GOT_LOCATION_BYID";
export const CLEAR_LOCATION_SELECTED = "CLEAR_LOCATION_SELECTED";
export const LOCATIONS_ERROR = "LOCATIONS_ERROR";

export const locationsRequest = (currentPage: number, searchTerm?: string) => ({
    type: GET_LOCATIONS,
    payload: { currentPage, searchTerm }
});

export const locationsRequestSuccess = (payload: any) => ({
    type: GOT_LOCATIONS,
    payload
});

export const locationByIdRequest = (id: number) => ({
    type: GET_LOCATION_BYID,
    payload: id
});

export const locationByIdRequestSuccess = (payload: any) => ({
    type: GOT_LOCATION_BYID,
    payload
});

export const clearLocationSelected = () => ({
    type: CLEAR_LOCATION_SELECTED,
    payload: undefined
});

export const locationsRequestError = (payload: any) => ({
    type: LOCATIONS_ERROR,
    payload
});
