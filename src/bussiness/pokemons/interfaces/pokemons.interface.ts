import type { Cries, Stat, Type } from "./pokemon-detail.interface";

export interface Pokemons {
    id: number;
    name: string;
    img: string;
    stats: Stat[];
    cries: Cries;
    types: Type[];
}