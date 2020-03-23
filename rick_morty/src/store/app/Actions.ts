import { BreadCrumb } from "./AppStore";

export const SET_BREADCRUMBS = "SET_BREADCRUMBS";
export const SET_LOADING = "SET_LOADING";

export const setBreadcrumbs = (breadcrumbs: BreadCrumb[]) => ({
    type: SET_BREADCRUMBS,
    payload: breadcrumbs
});

export const setLoading = (value: boolean) => ({
    type: SET_LOADING,
    payload: value
});
