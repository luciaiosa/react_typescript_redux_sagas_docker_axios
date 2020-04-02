export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
    gender: string;
    url: string;
    created: string;
}
export interface History {
    url: string;
    characterId: number;
    characterName: string;
    visitedAt: Date;
}

export interface CharacterStore {
    readonly loading: boolean;
    readonly pages: number;
    readonly characters: Character[];
    readonly selectedCharacter: Character | undefined;
    readonly selectedCharactersToCompare: Character[];
    readonly visitedCharactersHistory: History[];
    readonly hasError: boolean;
    readonly errorMessage: string;
}

export const InitialCharacterStore: CharacterStore = {
    loading: false,
    pages: 1,
    characters: [],
    selectedCharacter: undefined,
    selectedCharactersToCompare: [],
    visitedCharactersHistory: [],
    hasError: false,
    errorMessage: ""
};
