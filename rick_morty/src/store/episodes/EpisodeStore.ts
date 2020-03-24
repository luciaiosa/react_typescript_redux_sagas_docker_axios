export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    url: string;
    created: string;
}

export interface EpisodeStore {
    readonly episodes: Episode[];
    readonly selectedEpisode: Episode | undefined;
}

export const InitialEpisodeStore: EpisodeStore = {
    episodes: [],
    selectedEpisode: undefined
};
