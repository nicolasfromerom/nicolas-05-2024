import { ref, watch } from "vue";
import type { Pokemons } from "../interfaces/pokemons.interface";
import { getPokemons } from "../services/pokemonServices";
import { usePokemonsStore } from "../stores/pokemonsStore";
import { storeToRefs } from "pinia";

export const usePokemonsComposables = () => {
    const store = usePokemonsStore();
    const { offset, limit, teamPokemons, pokemonSelect, pokemons  } = storeToRefs( store );
    
    const isLoading = ref<boolean>(true)
    

    getPokemons(offset.value, limit.value).then((data) => {
        pokemons.value.push(...data)
        isLoading.value = false
    })

    watch(offset, (newOffset) => {
        getPokemons(newOffset, limit.value).then((data) => {
            pokemons.value.push(...data)
            isLoading.value = false
        })
    })


    return {
        //Properties
        pokemons,
        isLoading,
        offset,
        teamPokemons,
        pokemonSelect,
        //Methods
        getOffset( offset: number ) {
            store.setOffset(offset)
        },

        createTeam(pokemon: Pokemons) {
            store.setTeamPokemons(pokemon)
        },
        setPokemonSelect(pokemon: Pokemons) {
            store.setPokemonSelect(pokemon)
        },
        deletePokemonTeam(pokemon: Pokemons) {
            store.deletePokemonTeam(pokemon)
        }
    }
    
};