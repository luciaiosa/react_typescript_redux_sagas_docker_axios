import React, { FunctionComponent, useState, useEffect } from 'react';

interface CharacterDetailProps {
    name: string
}
const CharacterDetail: FunctionComponent<CharacterDetailProps> = (props: CharacterDetailProps): JSX.Element => {
    const [character, setCharacter] = useState<CharacterDetailProps | null>(null)
    return (
        <>
            <h2>CharacterDetail</h2>
        </>
    );
};

export default CharacterDetail;