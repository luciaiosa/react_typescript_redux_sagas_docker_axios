export interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    url: string;
    created: string;
}

export interface LocationStore {
    readonly locations: Location[];
    readonly selectedLocation: Location | undefined;
}

export const InitialLocationStore: LocationStore = {
    locations: [],
    selectedLocation: undefined
};
