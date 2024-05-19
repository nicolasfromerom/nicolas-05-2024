import { ref } from "vue";
import type { Pokemons } from "../interfaces/pokemons.interface";
import { getPokemons } from "../services/pokemonServices";

export const usePokemons = () => {
    const pokemons = ref<Pokemons[]>([])
    const isLoading = ref<boolean>(true)

    getPokemons().then((data) => {
        console.log(data)
        pokemons.value = data
        isLoading.value = false
    })

    return {
        pokemons,
        isLoading
    }
    
};