import React, { FunctionComponent } from 'react';

interface LocationDetailProps {
    name: string
}
const LocationDetail: FunctionComponent<LocationDetailProps> = (props: LocationDetailProps): JSX.Element => {
    return (
        <>
            <h2>Body with props</h2>
        </>
    );
};

export default LocationDetail;