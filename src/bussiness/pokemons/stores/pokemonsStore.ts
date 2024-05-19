import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { PokemonsListResponseData } from '@/bussiness/pokemons/interfaces/pokemons.interface';

export const usePokemonsStore = defineStore('pokemons', ()  => {

    const count = ref<number>(0);
    const offset = ref<number>(0);
    const limit:number  = 25;
    const pokemons = ref<PokemonsListResponseData[]>([]);

    return {
        // State
        count,
        offset,
        limit,
        pokemons,

        //Getters


        // Actions
        setPokemons( newPokemons: PokemonsListResponseData[] ) {
            pokemons.value = newPokemons;
        },
        setOffset( newOffset: number ) {
            if(offset.value == newOffset) return;
            offset.value = newOffset;
        }
    }
});