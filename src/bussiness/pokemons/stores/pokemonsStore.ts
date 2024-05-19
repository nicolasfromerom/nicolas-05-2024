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
        setTeamPokemons( pokemonsTeams: Pokemons ) {
            if( teamPokemons.value.length >= 6 ) return;

            if (teamPokemons.value.find( (pokemon) => pokemon.id === pokemonsTeams.id )) return

            pokemons.value.forEach( (pokemon) => {
                if( pokemon.id === pokemonsTeams.id ) {
                    pokemon.isSelected = true;
                }
            })

            teamPokemons.value.push(pokemonsTeams);
        },
        setPokemonSelect( pokemon: Pokemons ) {
            pokemonSelect.value = pokemon;
        },
        deletePokemonTeam( pokemonsTeams: Pokemons ) {
            const index = teamPokemons.value.findIndex( (pokemon) => pokemon.id === pokemonsTeams.id );

            if( index !== -1 ) {
                teamPokemons.value.splice(index, 1);
            }

            pokemons.value.forEach( (pokemon) => {
                if( pokemon.id === pokemonsTeams.id ) {
                    pokemon.isSelected = false;
                }
            })
        }
    }
});