<script setup lang="ts">
import { useRouter } from 'vue-router';
import PokemonCardComponent from '../components/PokemonCardComponent.vue';
import PokemonInformationComponent from '../components/PokemonInformationComponent.vue';
import { usePokemonsComposables } from '../composables/usePokemonsComposable';
import type { Pokemons } from '../interfaces/pokemons.interface';

const { teamPokemons, setPokemonSelect } = usePokemonsComposables();
const router = useRouter();
const viewPokemonDetail = (pokemon: Pokemons) => {
    setPokemonSelect(pokemon);
    router.push({ path: `/team/${pokemon.id}` });
};

</script>

<template>
    <div>
        <div class="card-container">
            <div v-for="(pokemon, index) in teamPokemons" :key="index" >
                <PokemonCardComponent @click="viewPokemonDetail(pokemon)" 
                    :pokemon="pokemon"
                />
                <PokemonInformationComponent :pokemon="pokemon"/>
            </div>
        </div>
    </div>  
</template>
<style scoped>
.card-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px 80px;
}

@media (max-width: 600px) {
    .card-container {
        grid-template-columns: 1fr;
    }
}
</style>