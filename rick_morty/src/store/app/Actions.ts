import { BreadCrumb } from "./AppStore";

export const SET_BREADCRUMBS = "SET_BREADCRUMBS";

export const setBreadcrumbs = (breadcrumbs: BreadCrumb[]) => ({
    type: SET_BREADCRUMBS,
    payload: breadcrumbs
});
