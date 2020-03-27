export const GETTING_EPISODES = "GETTING_EPISODES";
export const GOT_EPISODES = "GOT_EPISODES";
export const GETTING_EPISODE_BYID = "GETTING_EPISODE_BYID";
export const GOT_EPISODE_BYID = "GOT_EPISODE_BYID";
export const CLEAR_EPISODE_SELECTED = "CLEAR_EPISODE_SELECTED";

export const episodesRequest = (currentPage: number, searchTerm?: string) => ({
    type: GETTING_EPISODES,
    payload: { currentPage, searchTerm }
});

export const episodesRequestSuccess = (payload: any) => ({
    type: GOT_EPISODES,
    payload
});

export const episodeByIdRequest = (id: number) => ({
    type: GETTING_EPISODE_BYID,
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
