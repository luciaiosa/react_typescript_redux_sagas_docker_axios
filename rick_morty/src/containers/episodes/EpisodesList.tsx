import React, { FunctionComponent } from 'react';
import useResources from '../../apis/useResources';

interface EpisodesListProps {
    resource: string
}
interface Episode {
    id: number;
    name: string;
    air_date: Date;
    url: string;
}

const EpisodesList: FunctionComponent<EpisodesListProps> = (props: EpisodesListProps): JSX.Element => {

    const resources = useResources(props.resource);

    return (
        <div>
            <h2>Episodes:</h2>
            <ul>
                {resources.map((item: Episode) => <li key={item.id}>{item.name}- {item.air_date}- {item.url}</li>)}
            </ul>
        </div>
    )
}

export default EpisodesList;