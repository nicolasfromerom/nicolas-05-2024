import type { PokemonsListResponse } from './pokemons.interface';

export interface PokemonsStoreInterface {
    count: number,
    offset: number,
    limit: number,
    pokemons: PokemonsListResponse
}
