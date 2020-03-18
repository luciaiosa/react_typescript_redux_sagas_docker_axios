import { useState, useEffect } from 'react';
import axios from './rick_morty';

/* metodo reutilizable usado para traer los personajes/ locaciones/ episodios */

const useResources = resource => {
    const [resources, setResources] = useState([]);
    useEffect(
        () => {
            // declaro y llamo inmediatamente una arrow function con parametro resource
            (async resource => {
                const response = await axios.get(`/${resource}`);

                setResources(response.data.results);
            })(resource);
        }, [resource]
    );

    return resources;
}

export default useResources;

// "characters":"https://rickandmortyapi.com/api/character"
// "locations":"https://rickandmortyapi.com/api/location"
// "episodes":"https://rickandmortyapi.com/api/episode"