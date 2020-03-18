import React, { FunctionComponent, useState } from 'react';
// I connect the component with the store
import { connect } from 'react-redux';
import { Character, getCharacters } from '../../reduxStore/actions';
import { StoreState } from '../../reduxStore/reducers';
import useResources from '../../apis/useResources';
import useSearchResults from '../../hooks/useSearchResults';
import SearchBar from '../../components/SearchBar';

interface CharactersListProps {
    resource: string;
}

const _CharactersList: FunctionComponent<CharactersListProps> = (props: CharactersListProps): JSX.Element => {

    const resources = useResources(props.resource);
    // usar nuestro hook!!
    // const [searchResults, results, errorMessge] = useSearchResults();
    // const [searchTerm, setSearchTerm] = useState("");

    const renderList = (): JSX.Element[] => {
        return resources.map((character: Character) => {
            return <div key={character.id}>{character.name}- {character.gender}- {character.url}</div>
        });
    }

    return (

        //  Esto se puede escribir como un tag vacio, que por defecto coge solo el espacio que hay en la pantalla
        // <div style={{flex: 1}}>
        <div style={{display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column"}}>
            {/* <SearchBar
                searchTerm={searchTerm}
                onSearchTermChange={(newValue) => setSearchTerm(newValue)}
            /> */}
            <h2>Characters:</h2>
            {renderList()}
        </div>
    )
}

// mapStateToProps receives the entire store state as prop, and returns an object: {characters: of type Character array}
const mapStateToProps = ({ characters }: StoreState): { characters: Character[] } => {
    // using destructuring
    return { characters }
}
// Connect the component to the store; { getCharacters } is the reducer
export default connect(mapStateToProps, { getCharacters })(_CharactersList);