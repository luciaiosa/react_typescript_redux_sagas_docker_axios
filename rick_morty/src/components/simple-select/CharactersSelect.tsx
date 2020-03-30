import React, { useState, FunctionComponent } from "react";
import { Character, CharacterStore } from "../../store/characters";
import { useSelector } from "react-redux";
import { AppStore } from "../../store/app/AppStore";
import { styles } from "./CharactersSelectStyles";

interface SimpleSelectProps {
    onSelect(character: number): void;
}

const CharactersSelect: FunctionComponent<SimpleSelectProps> = (
    props: SimpleSelectProps
): JSX.Element => {
    const classes = styles();
    const { characters, selectedCharacter } = useSelector<
        AppStore,
        CharacterStore
    >(state => state.characterStore);

    const handleOnSelect = (character: number): void => {
        props.onSelect(character);
    };

    const currentValue = () => {
        if (selectedCharacter) {
            return selectedCharacter.id;
        }
        return 0;
    };

    const renderOptions = () => {
        return characters.map((character: Character) => {
            return (
                <option value={character.id} key={character.id}>
                    {character.name}
                </option>
            );
        });
    };
    return (
        <div className={classes.selectContainer}>
            <select
                className={classes.select}
                value={currentValue()}
                onChange={(e: any) => handleOnSelect(e.target.value)}
            >
                <option value={0} disabled>
                    Select a character...
                </option>
                {renderOptions()}
            </select>
        </div>
    );
};

export default CharactersSelect;
