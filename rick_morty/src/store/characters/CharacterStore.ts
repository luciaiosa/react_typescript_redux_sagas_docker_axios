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

export const InitialCharacterStore: CharacterStore = {
    pages: 1,
    characters: [],
    selectedCharacter: undefined
};

export interface CharacterStore {
    readonly pages: number;
    readonly characters: Character[];
    readonly selectedCharacter: Character | undefined;
}
