import React, { FunctionComponent } from 'react';
import useResources from '../../apis/useResources';
import useSearchResults from '../../hooks/useSearchResults';
import SearchBar from '../../components/SearchBar';

interface LocationsListProps {
    resource: string
}
interface Location {
    id: number;
    name: string;
    type: string;
    url: string;
}

const LocationsList: FunctionComponent<LocationsListProps> = (props: LocationsListProps): JSX.Element => {

    const resources = useResources(props.resource);
    // usar nuestro hook!!
    // const [searchResults, results, errorMessge] = useSearchResults();
    // const [searchTerm, setSearchTerm] = useState("");

    return (
        <div>
            <h2>Locations:</h2>
            {/* <SearchBar searchTerm={searchTerm}
                onSearchTermChange={(newValue) => setSearchTerm(newValue)}
                onTermEndEditing={() => searchResults()} // cuando se pulsa Enter, o el botón de OK
                /> */}
            <ul>
                {resources.map((location: Location) => <li key={location.id}>{location.name}- {location.type}- {location.url}</li>)}
            </ul>
        </div>
    )
}

export default LocationsList;