// I'll export these interfaces to use them into the reducers!!!
export interface Character {
    id: number;
    name: string;
    gender: string;
    url: string;
}

export interface Episode {
    id: number;
    name: string;
    air_date: Date;
    url: string;
}

export interface Location {
    id: number;
    name: string;
    type: string;
    url: string;
}