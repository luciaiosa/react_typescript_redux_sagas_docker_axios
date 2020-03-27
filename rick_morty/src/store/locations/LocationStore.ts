export interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    url: string;
    created: string;
}

export interface LocationStore {
    readonly pages: number;
    readonly locations: Location[];
    readonly selectedLocation: Location | undefined;
}

export const InitialLocationStore: LocationStore = {
    pages: 1,
    locations: [],
    selectedLocation: undefined
};
