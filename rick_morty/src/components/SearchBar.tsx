import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
// importar Feather, FontAwesome o cualquier librería de iconos (la tercera columna de la página https://expo.github.io/vector-icons/; 
// la segunda columna es el nombre del icono que se usa dentro del componente: name="search" )
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps extends React.HTMLProps<{}> {
    searchTerm: string;
    onSearchTermChange(value: string): string;
}

const SearchBar: FunctionComponent<SearchBarProps> = (props: SearchBarProps): JSX.Element => {
    return (
        <Div>
            {/* Usar el icono de la lupa de search */}
            {/* <Feather name="search" size={30} /> */}
            {/* <FontAwesome name="search"/> */}
            <FaSearch name="search" style={{fontSize: 35,
                alignSelf: 'center', 
                marginTop: 15}} />
            <Input
                placeholder="Search"
                value={props.searchTerm}
                onChange={(e: React.FormEvent<HTMLInputElement>) => props.onSearchTermChange(e.currentTarget.value)}
                spellCheck={false}
            />
        </Div>
    )
};

const Div = styled.div`
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10`;

const Input = styled.input`
        flex: 1,
        fontSize: 18`;

export default SearchBar;