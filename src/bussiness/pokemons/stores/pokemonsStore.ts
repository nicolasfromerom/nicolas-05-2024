import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { PokemonsListResponseData } from '@/bussiness/pokemons/interfaces/pokemons-response.interface';
import type { Pokemons } from '../interfaces/pokemons.interface';

export const usePokemonsStore = defineStore('pokemons', ()  => {

    const count = ref<number>(0);
    const offset = ref<number>(0);
    const limit:number  = 25;
    const pokemonsList = ref<PokemonsListResponseData[]>([]);
    const pokemonSelect = ref<Pokemons>({} as Pokemons);
    const teamPokemons = ref<Pokemons[]>([]);
    const pokemons = ref<Pokemons[]>([])

    return {
        // State
        count,
        offset,
        limit,
        pokemonsList,
        teamPokemons,
        pokemonSelect,
        pokemons,
        //Getters


        // Actions
        setPokemons( newPokemons: PokemonsListResponseData[] ) {
            pokemonsList.value = newPokemons;
        },
        setOffset( newOffset: number ) {
            offset.value = newOffset;
        },
        setTeamPokemons( pokemons: Pokemons ) {
            if( teamPokemons.value.length >= 6 ) return;

            if (teamPokemons.value.find( (pokemon) => pokemon.id === pokemons.id )) return

            teamPokemons.value.push(pokemons);
        },
        setPokemonSelect( pokemon: Pokemons ) {
            pokemonSelect.value = pokemon;
        }
    }
});