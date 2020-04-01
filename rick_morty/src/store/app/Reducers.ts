import { Reducer, AnyAction } from "redux";
import { BreadCrumb } from "./AppStore";
import { SET_BREADCRUMBS } from "./Actions";

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
