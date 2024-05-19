<script setup lang="ts">
import PokemonCardComponent from '../components/PokemonCardComponent.vue';
import { usePokemons } from '../composables/usePokemons';

const { pokemons, isLoading } = usePokemons();

</script>

<template>
    <div>
        <h1 v-if="isLoading">Cargando...</h1>
        <div class="card-container">
            <div v-for="pokemon in pokemons" :key="pokemon.id" >
                <PokemonCardComponent :name="pokemon.name" :id="pokemon.id" :img="pokemon.img"/>
            </div>
        </div>
    </div>
</template>
<style scoped>
.card-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px; /* Espacio entre los divs */
}

@media (max-width: 600px) {
    .card-container {
        grid-template-columns: 1fr;
    }
}

</style>