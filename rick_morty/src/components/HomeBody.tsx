import React, { FunctionComponent } from 'react';
import Menu from '../components/Menu';
import Button from '../components/components-ui/Button';

interface BodyProps {
    name: string
}
const HomeBody: FunctionComponent<BodyProps> = (props: BodyProps): JSX.Element => {
    return (
        <>
            <h2>HomeBody: Bienvenida, Acceder a listados</h2> 
            {/* <Menu name="menu"></Menu> */}
            <Button>Go to Characters List</Button>
            <Button>Go to Chapters List</Button>
            <Button>Go to Cities List</Button>
        </>
    );
};

export default HomeBody;