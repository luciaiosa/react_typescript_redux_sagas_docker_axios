import { Reducer, AnyAction } from "redux";
import { BreadCrumb } from "./AppStore";
import { SET_BREADCRUMBS, SET_LOADING } from "./Actions";

export const breadCrumbStoreReducer: Reducer<BreadCrumb[], AnyAction> = (
    state = [],
    action
) => {
    switch (action.type) {
        case SET_BREADCRUMBS:
            return action.payload;
        default:
            return state;
    }
};

export const loadingReducer: Reducer<boolean, AnyAction> = (
    state = false,
    action
) => {
    switch (action.type) {
        case SET_LOADING:
            return action.payload;
        default:
            return state;
    }
};
