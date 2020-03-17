import React, { FunctionComponent } from 'react';

interface PaginatorProps {
    name: string
}
const Paginator: FunctionComponent<PaginatorProps> = (props: PaginatorProps): JSX.Element => {
    return (
        <>
            <h2>Paginator</h2>
        </>
    );
};

export default Paginator;