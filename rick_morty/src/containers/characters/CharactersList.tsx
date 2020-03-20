import React, { FunctionComponent, useState, useEffect } from 'react';
import api from '../../apis/rick_morty';
// I connect the component with the store
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Character, getCharacters } from '../../reduxStore/actions';
import { StoreState } from '../../reduxStore/reducers';
import useSearchResults from '../../hooks/useSearchResults';
import SearchBar from '../../components/SearchBar';
import Spinner from '../../components/Spinner';

interface CharactersListProps {
    resource: string;
}

const _CharactersList: FunctionComponent<CharactersListProps> = ({ resource }: CharactersListProps): JSX.Element => {

    // usar el hook creado!!
    // const [searchResults, results, errorMessge] = useSearchResults();
    const [searchTerm, setSearchTerm] = useState("");

    const [results, setResults] = useState([]);
    // para que se vuelva a renderizar el contenido de la página cuando hay un API error, hay que añadir al estado un mensaje de error
    const [errorMessage, setErrorMessage] = useState("Loading...");

    // cuando se renderiza por primera vez, se hace una llamada API, para cargar contenido en la pantalla
    const searchResults = async (resource: string, searchTerm: string) => {
        try {
            const response = await api.get(`/${resource}/`, {
                params: {
                    term: searchTerm
                }
            });
            setResults(response.data.results);
            setErrorMessage('');
        } catch (err) {
            setErrorMessage('Something went wrong, there was an error with the API request.');
        }
    }

    // useEffect (WITH AN ARROW FUNCTION AND AN EMPTY ARRAY AS PARAMS) runs the arrow function that is passed as param ONLY THE FIRST TIME the component is rendered to the screen.
    // call searchResults when component is first rendered USING useEffect!! 
    useEffect(() => {
        searchResults(resource, "");
    }, [])

    const renderList = (): JSX.Element[] => {
        return results.map((character: Character) => {
            return (
                <div key={character.id} className="item">
                    <div className="content">
                        <Link to={`/streams/${character.id}`} className="header">
                            {character.name}
                        </Link>
                        <div className="description">
                            {character.gender}- {character.url}
                        </div>
                    </div>
                </div>);
        });
    }

    let content;
    if (errorMessage || !results) {
        content = <Spinner message={errorMessage} />
    }
    else {
        content = <div>{renderList()}</div>;
    }

    return (
        <div>
            <h2>Characters:</h2>
            <div className="ui celled list">{content}</div>
            {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column" }}>
                {/* <SearchBar
                    searchTerm={searchTerm}
                    onSearchTermChange={(newValue) => setSearchTerm(newValue)}
                /> *
                
                {content}
            </div> */}
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