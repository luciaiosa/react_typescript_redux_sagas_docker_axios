import { combineReducers } from "redux";
import { AppStore } from "./app/AppStore";
import { characterStoreReducer } from "./characters";
import { breadCrumbStoreReducer, loadingReducer } from "./app/Reducers";

export const rootReducer = combineReducers<AppStore>({
    characterStore: characterStoreReducer,
    breadcrumbs: breadCrumbStoreReducer,
    loading: loadingReducer
});
