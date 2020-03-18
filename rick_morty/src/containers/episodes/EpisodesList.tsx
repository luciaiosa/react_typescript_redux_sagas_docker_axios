import React, { FunctionComponent, useState } from 'react';
// I connect the component with the store
import { connect } from 'react-redux';
import { Episode, getEpisodes } from '../../reduxStore/actions';
import { StoreState } from '../../reduxStore/reducers';
import useResources from '../../apis/useResources';
import useSearchResults from '../../hooks/useSearchResults';
import SearchBar from '../../components/SearchBar';

interface EpisodesListProps {
    resource: string
}

const _EpisodesList: FunctionComponent<EpisodesListProps> = (props: EpisodesListProps): JSX.Element => {

    const resources = useResources(props.resource);

    // usar nuestro hook!!
    // const [searchResults, results, errorMessge] = useSearchResults();
    // const [searchTerm, setSearchTerm] = useState("");

    const renderList = (): JSX.Element[] => {
        return resources.map((episode: Episode) => {
            return <div key={episode.id}>{episode.name}- {episode.air_date}- {episode.url}</div>
        });
    }

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column"}}>
            {/* <SearchBar
                searchTerm={searchTerm}
                onSearchTermChange={(newValue) => setSearchTerm(newValue)}
            /> */}
            <h2>Episodes:</h2>
            {renderList()}
        </div>
    )
}

// mapStateToProps receives the entire store state as prop, and returns an object: {episodes: of type Episode array}
const mapStateToProps = ({episodes}: StoreState): {episodes: Episode[]} => {
    return {episodes}
}
// Connect the component to the store; { getCharacters } is the reducer
export default connect(mapStateToProps, {getEpisodes})(_EpisodesList);