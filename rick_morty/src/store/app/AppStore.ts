import { CharacterStore, InitialCharacterStore } from "../characters";

export interface BreadCrumb {
    link: string | null;
    label: string;
    key: string;
}

export const initialAppStore: AppStore = {
    breadcrumbs: [],
    characterStore: InitialCharacterStore,
    loading: false
};

export interface AppStore {
    characterStore: CharacterStore;
    breadcrumbs: BreadCrumb[];
    loading: boolean;
}
