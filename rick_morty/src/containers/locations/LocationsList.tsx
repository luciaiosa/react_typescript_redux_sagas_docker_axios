import React, { FunctionComponent, useState, useEffect } from 'react';
import api from '../../apis/rick_morty';
// I connect the component with the store
import { connect } from 'react-redux';
import useSearchResults from '../../hooks/useSearchResults';
import SearchBar from '../../components/SearchBar';
import {Location, getLocations } from '../../reduxStore/actions';
import { StoreState } from '../../reduxStore/reducers';
import Spinner from '../../components/Spinner';

interface LocationsListProps {
    resource: string;
}

const _LocationsList: FunctionComponent<LocationsListProps> = (props: LocationsListProps): JSX.Element => {

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
        searchResults(props.resource, "");
    }, [])

    const renderList = (): JSX.Element[] => {
        return results.map((location: Location) => {
            return <div key={location.id}>{location.name}- {location.type}- {location.url}</div>
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
            <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column" }}>
                {/* <SearchBar
                    searchTerm={searchTerm}
                    onSearchTermChange={(newValue) => setSearchTerm(newValue)}
                /> */}
                <h2>Locations:</h2>
                {content}
            </div>
        </div>
    )
}
// mapStateToProps is a function that receives the entire store state as prop, and returns an object: {characters: of type Character array}
const mapStateToProps = ({ locations }: StoreState): { locations: Location[] } => {
    // using destructuring
    return { locations }
}

export default connect(mapStateToProps, {getLocations})(_LocationsList);