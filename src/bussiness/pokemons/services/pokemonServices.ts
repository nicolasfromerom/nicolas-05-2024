import axios from "axios";
import type { PokemonsListResponse } from "../interfaces/pokemons-response.interface";
import type { Pokemons } from "../interfaces/pokemons.interface";
import type { PokemonDetailResponse } from "../interfaces/pokemon-detail.interface";


const pokemonService = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
})

export const getPokemons = async(offset: number): Promise<Pokemons[]> => {

    const { data } = await pokemonService.get<PokemonsListResponse>(`/pokemon?offset=${offset}&limit=25`);
    
    const pokemonPromises: Promise<Pokemons>[] = [];

    for (const { url } of data.results ) {
        const pokemonPromise = axios.get<PokemonDetailResponse>(url).then(({ data }) => {
            return {
            id: data.id,
            name: data.name,
            img: data.sprites.front_default,
            stats: data.stats,
            cries: data.cries,
            types: data.types,
            isSelected: false,
            }   
        });

        pokemonPromises.push( pokemonPromise );

    }
    
    const pokemons = await Promise.all( pokemonPromises );

    return pokemons;
}