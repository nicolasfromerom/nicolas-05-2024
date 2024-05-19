import axios from "axios";


const pokemonService = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
})

const getPokemons = async (limit: number, offset: number) => {
    const response = await pokemonService.get(`pokemon?limit=${limit}&offset=${offset}`);
    return response.data;
}

export default {
    pokemonService,
    getPokemons,
};