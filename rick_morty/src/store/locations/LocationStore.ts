export interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    url: string;
    created: string;
}

export interface LocationStore {
    readonly loading: boolean;
    readonly pages: number;
    readonly locations: Location[];
    readonly selectedLocation: Location | undefined;
}

export const InitialLocationStore: LocationStore = {
    loading: false,
    pages: 1,
    locations: [],
    selectedLocation: undefined
};
