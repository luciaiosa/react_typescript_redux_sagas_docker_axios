// Crear un hook nuestro!! Lo vamos a usar en SearchScreen, como cualquier otro hook

import {useEffect, useState} from 'react';
import axios from '../apis/rick_morty';

export default () => {
    const [results, setResults] = useState([]);
    // para que se vuelva a renderizar el contenido de la página cuando hay un API error, hay que añadir al estado un mensaje de error
    const [errorMessge, setErrorMessage] = useState('');

    // cuando se renderiza por primera vez, se hace una llamada API, para cargar contenido en la pantalla
    const searchResults = async (resource, searchTerm) => {
        try {
            const response = await axios.get(`/${resource}/`, {
                params: {
                    term: searchTerm
                }
            });
            setResults(response.data.results);
            setErrorMessage('');
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    }

    // useEffect (WITH AN ARROW FUNCTION AND AN EMPTY ARRAY AS PARAMS) runs the arrow function that is passed as param ONLY THE FIRST TIME the component is rendered to the screen.
    // call searchResults when component is first rendered USING useEffect!! 
    useEffect(() => {
        searchResults('characters');
    }, [])
    
    return [searchResults, results, errorMessge];
};