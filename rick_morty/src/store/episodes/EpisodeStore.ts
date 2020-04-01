export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    url: string;
    created: string;
}

export interface EpisodeStore {
    readonly loading: boolean;
    readonly pages: number;
    readonly episodes: Episode[];
    readonly selectedEpisode: Episode | undefined;
}

export const InitialEpisodeStore: EpisodeStore = {
    loading: false,
    pages: 1,
    episodes: [],
    selectedEpisode: undefined
};
