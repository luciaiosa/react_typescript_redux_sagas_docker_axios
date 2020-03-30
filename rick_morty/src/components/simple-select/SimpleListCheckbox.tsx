import React, { useState, FunctionComponent } from "react";
import { Character, CharacterStore } from "../../store/characters";
import { useSelector } from "react-redux";
import { AppStore } from "../../store/app/AppStore";

interface SimpleSelectProps {
    onSelect(character: Character): void;
}

interface CharacterMapped {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
    gender: string;
    url: string;
    created: string;
    selected: boolean;
}

const SimpleSelect: FunctionComponent<SimpleSelectProps> = (
    props: SimpleSelectProps
): JSX.Element => {
    const { characters, selectedCharacter } = useSelector<
        AppStore,
        CharacterStore
    >(state => state.characterStore);

    let charactersMaped = characters.map((character: Character) => {
        return {
            ...character,
            selected: false
        };
    });

    const [optionSelected, setOptionSelected] = useState(selectedCharacter);

    const handleOnSelect = (character: Character) => {
        setOptionSelected(character);
        props.onSelect(character);
    };

    const renderOptions = () => {
        return charactersMaped.map((character: CharacterMapped) => {
            return (
                <li
                    value={character.id}
                    key={character.id}
                    onClick={() => handleOnSelect(character)}
                >
                    <input
                        readOnly
                        type="checkbox"
                        checked={character.selected || false}
                    />
                    {character.name}
                </li>
            );
        });
    };
    return (
        <div>
            <ul>{renderOptions()}</ul>
            {/* {props.characters.map(item => {
                return (
                    <li key={item.id} onClick={() => toggle(item)}>
                        {/* Each <input> element has the type='checkbox' attribute and is marked as readOnly, as its click events are handled by the parent <li> element's onSelect handler. */}
            {/* <input
                            readOnly
                            type="checkbox"
                            checked={item.checked || false}
                        />
                        {item.name}
                    </li>
                );
            })} */}
        </div>
    );
};

export default SimpleSelect;
