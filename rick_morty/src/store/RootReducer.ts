import { combineReducers } from "redux";
import { AppStore } from "./app/AppStore";
import { characterStoreReducer } from "./characters";
import { episodeStoreReducer } from "./episodes";
import { locationStoreReducer } from "./locations";
import { breadCrumbStoreReducer, loadingReducer } from "./app/Reducers";

export const rootReducer = combineReducers<AppStore>({
    characterStore: characterStoreReducer,
    episodeStore: episodeStoreReducer,
    locationStore: locationStoreReducer,
    breadcrumbs: breadCrumbStoreReducer,
    loading: loadingReducer
});
