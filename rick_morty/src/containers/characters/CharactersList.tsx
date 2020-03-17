import React, { FunctionComponent } from 'react';
import useResources from '../../apis/useResources';
// // import DataTable from 'react-data-components';

interface CharactersListProps {
    resource: string
}

interface Character {
    id: number;
    name: string;
    gender: string;
    url: string;
}

const CharactersList: FunctionComponent<CharactersListProps> = (props: CharactersListProps): JSX.Element => {
    const resources = useResources(props.resource);

    // let columns = [
    //     { title: 'Name', prop: 'name' },
    //     { title: 'Gender', prop: 'gender' },
    //     { title: 'Url', prop: 'url' }
    // ]

    return (

        // <DataTable
        //     className="container"
        //     keys="id"
        //     columns={columns}
        //     initialData={resources}
        //     initialPageLength={5}
        //     initialSortBy={{ prop: 'name', order: 'descending' }}
        //     pageLengthOptions={[5, 20, 50]}
        // />
        <div>
            <h2>Characters:</h2>
            <ul>
                {resources.map((character: Character) => <li key={character.id}>{character.name}- {character.gender}- {character.url}</li>)}
            </ul>
        </div>
    )
}

export default CharactersList;