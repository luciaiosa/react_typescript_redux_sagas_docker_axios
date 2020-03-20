import React, { FunctionComponent, useState, useEffect } from 'react';
import api from '../../apis/rick_morty';
// I connect the component with the store
import { connect } from 'react-redux';
import { Episode, getEpisodes } from '../../reduxStore/actions';
import { StoreState } from '../../reduxStore/reducers';
import useSearchResults from '../../hooks/useSearchResults';
import SearchBar from '../../components/SearchBar';
import Spinner from '../../components/Spinner';

interface EpisodesListProps {
    resource: string
}

const _EpisodesList: FunctionComponent<EpisodesListProps> = (props: EpisodesListProps): JSX.Element => {

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
        return results.map((episode: Episode) => {
            return <div key={episode.id}>{episode.name}- {episode.air_date}- {episode.url}</div>
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
                <h2>Episodes:</h2>
                {content}
            </div>
        </div>

    )
}

// mapStateToProps receives the entire store state as prop, and returns an object: {episodes: of type Episode array}
const mapStateToProps = ({ episodes }: StoreState): { episodes: Episode[] } => {
    return { episodes }
}
// Connect the component to the store; { getCharacters } is the reducer
export default connect(mapStateToProps, { getEpisodes })(_EpisodesList);