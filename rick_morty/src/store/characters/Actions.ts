export const GETTING_CHARACTERS = "GETTING_CHARACTERS";
export const GOT_CHARACTERS = "GOT_CHARACTERS";
export const GETTING_CHARACTER_BYID = "GETTING_CHARACTER_BYID";
export const GOT_CHARACTER_BYID = "GOT_CHARACTER_BYID";
export const CLEAR_CHARACTER_SELECTED = "CLEAR_CHARACTER_SELECTED";

export const charactersRequest = (
    searchTerm?: string,
    currentPage?: number
) => ({
    type: GETTING_CHARACTERS,
    payload: { searchTerm, currentPage }
});

export const charactersRequestSuccess = (payload: any) => ({
    type: GOT_CHARACTERS,
    payload
});

export const characterByIdRequest = (id: number) => ({
    type: GETTING_CHARACTER_BYID,
    payload: id
});

export const characterByIdRequestSuccess = (payload: any) => ({
    type: GOT_CHARACTER_BYID,
    payload
});

export const clearCharacterSelected = () => ({
    type: CLEAR_CHARACTER_SELECTED,
    payload: undefined
});
