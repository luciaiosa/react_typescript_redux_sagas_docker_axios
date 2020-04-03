export const GET_EPISODES = "GET_EPISODES";
export const GOT_EPISODES = "GOT_EPISODES";
export const GET_EPISODE_BYID = "GET_EPISODE_BYID";
export const GOT_EPISODE_BYID = "GOT_EPISODE_BYID";
export const CLEAR_EPISODE_SELECTED = "CLEAR_EPISODE_SELECTED";
export const EPISODES_ERROR = "EPISODES_ERROR";

export const episodesRequest = (currentPage: number, searchTerm?: string) => ({
    type: GET_EPISODES,
    payload: { currentPage, searchTerm }
});

export const episodesRequestSuccess = (payload: any) => ({
    type: GOT_EPISODES,
    payload
});

export const episodeByIdRequest = (id: number) => ({
    type: GET_EPISODE_BYID,
    payload: id
});

export const episodeByIdRequestSuccess = (payload: any) => ({
    type: GOT_EPISODE_BYID,
    payload
});

export const clearEpisodeSelected = () => ({
    type: CLEAR_EPISODE_SELECTED,
    payload: undefined
});

export const episodesRequestError = (payload: any) => ({
    type: EPISODES_ERROR,
    payload
});
