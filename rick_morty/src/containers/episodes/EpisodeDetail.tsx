import React, { FunctionComponent } from 'react';

interface EpisodeDetailProps {
    resource: string,
    id: number
}
const EpisodeDetail: FunctionComponent<EpisodeDetailProps> = (props: EpisodeDetailProps): JSX.Element => {
    return (
        <>
            <h2>{props.id}</h2>
        </>
    );
};

export default EpisodeDetail;