import { CharacterStore, InitialCharacterStore } from "../characters";
import { InitialEpisodeStore, EpisodeStore } from "../episodes";
import { InitialLocationStore, LocationStore } from "../locations";

export interface BreadCrumb {
    link: string | null;
    label: string;
    key: string;
}

export const initialAppStore: AppStore = {
    breadcrumbs: [],
    characterStore: InitialCharacterStore,
    episodeStore: InitialEpisodeStore,
    locationStore: InitialLocationStore
};

export interface AppStore {
    characterStore: CharacterStore;
    episodeStore: EpisodeStore;
    locationStore: LocationStore;
    breadcrumbs: BreadCrumb[];
}
