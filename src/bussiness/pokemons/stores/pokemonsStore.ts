import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { PokemonsListResponseData } from '@/bussiness/pokemons/interfaces/pokemons-response.interface';
import type { Pokemons } from '../interfaces/pokemons.interface';

export const usePokemonsStore = defineStore('pokemons', ()  => {

    const count = ref<number>(0);
    const offset = ref<number>(0);
    const limit:number  = 25;
    const pokemons = ref<PokemonsListResponseData[]>([]);
    const pokemonSelect = ref<Pokemons>({} as Pokemons);
    const teamPokemons = ref<Pokemons[]>([]);

    return {
        // State
        count,
        offset,
        limit,
        pokemons,
        teamPokemons,
        pokemonSelect,
        //Getters


        // Actions
        setPokemons( newPokemons: PokemonsListResponseData[] ) {
            pokemons.value = newPokemons;
        },
        setOffset( newOffset: number ) {
            offset.value = newOffset;
        },
        setTeamPokemons( pokemons: Pokemons ) {
            if( teamPokemons.value.length >= 6 ) {
                console.log('No puedes tener más de 6 pokemons en tu equipo')
                return;
            }
            teamPokemons.value.push(pokemons);
        },
        setPokemonSelect( pokemon: Pokemons ) {
            pokemonSelect.value = pokemon;
        }
    }
});