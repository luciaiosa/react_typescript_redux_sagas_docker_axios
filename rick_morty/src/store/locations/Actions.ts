export const GETTING_LOCATIONS = "GETTING_LOCATIONS";
export const GOT_LOCATIONS = "GOT_LOCATIONS";
export const GETTING_LOCATION_BYID = "GETTING_LOCATION_BYID";
export const GOT_LOCATION_BYID = "GOT_LOCATION_BYID";
export const CLEAR_LOCATION_SELECTED = "CLEAR_LOCATION_SELECTED";

export const locationsRequest = (searchTerm?: string) => ({
    type: GETTING_LOCATIONS,
    payload: searchTerm
});

export const locationsRequestSuccess = (payload: any) => ({
    type: GOT_LOCATIONS,
    payload
});

export const locationByIdRequest = (id: number) => ({
    type: GETTING_LOCATION_BYID,
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
