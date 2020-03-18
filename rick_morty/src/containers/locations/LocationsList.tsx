import React, { FunctionComponent } from 'react';
// I connect the component with the store
import { connect } from 'react-redux';
import useResources from '../../apis/useResources';
import useSearchResults from '../../hooks/useSearchResults';
import SearchBar from '../../components/SearchBar';
import {Location, getLocations } from '../../reduxStore/actions';
import { StoreState } from '../../reduxStore/reducers';

interface LocationsListProps {
    resource: string;
}

const _LocationsList: FunctionComponent<LocationsListProps> = (props: LocationsListProps): JSX.Element => {

    const resources = useResources(props.resource);
    // usar nuestro hook!!
    // const [searchResults, results, errorMessge] = useSearchResults();
    // const [searchTerm, setSearchTerm] = useState("");

    const renderList = (): JSX.Element[] => {
        return resources.map((location: Location) => {
            return <div key={location.id}>{location.name}- {location.type}- {location.url}</div>
        });
    }

    return (
        <div>
            <h2>Locations:</h2>
            {/* <SearchBar searchTerm={searchTerm}
                onSearchTermChange={(newValue) => setSearchTerm(newValue)}
                onTermEndEditing={() => searchResults()} // cuando se pulsa Enter, o el botón de OK
                /> */}
            {renderList()}
        </div>
    )
}
// mapStateToProps is a function that receives the entire store state as prop, and returns an object: {characters: of type Character array}
const mapStateToProps = ({ locations }: StoreState): { locations: Location[] } => {
    // using destructuring
    return { locations }
}

export default connect(mapStateToProps, {getLocations})(_LocationsList);