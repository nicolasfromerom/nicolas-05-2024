import { ref, watch } from "vue";
import type { Pokemons } from "../interfaces/pokemons.interface";
import { getPokemons } from "../services/pokemonServices";
import { usePokemonsStore } from "../stores/pokemonsStore";
import { storeToRefs } from "pinia";

export const usePokemonsComposables = () => {
    const store = usePokemonsStore();
    const { offset } = storeToRefs( store );
    
    const pokemons = ref<Pokemons[]>([])
    const isLoading = ref<boolean>(true)
    

    getPokemons(offset.value).then((data) => {
        console.log(data)
        pokemons.value.push(...data)
        isLoading.value = false
    })

    watch(offset, (newOffset) => {
        getPokemons(newOffset).then((data) => {
            console.log(data)
            pokemons.value.push(...data)
            isLoading.value = false
        })
    })


    return {
        //Properties
        pokemons,
        isLoading,
        offset,
        //Methods
        getOffset( offset: number ) {
            store.setOffset(offset)
        }
    }
    
};