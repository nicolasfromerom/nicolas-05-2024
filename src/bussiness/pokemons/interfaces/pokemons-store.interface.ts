import type { PokemonsListResponse } from './pokemons-response.interface';

export interface PokemonsStoreInterface {
    count: number,
    offset: number,
    limit: number,
    pokemons: PokemonsListResponse
}
