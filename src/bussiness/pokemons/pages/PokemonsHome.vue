<script setup lang="ts">
import PokemonCardComponent from '../components/PokemonCardComponent.vue';
import { usePokemonsComposables } from '../composables/usePokemonsComposable';

const { pokemons, isLoading, getOffset, offset } = usePokemonsComposables();

</script>

<template>
    <div>
        <h1 v-if="isLoading">Cargando...</h1>
        <div class="card-container">
            <div v-for="pokemon in pokemons" :key="pokemon.id" >
                <PokemonCardComponent :name="pokemon.name" :id="pokemon.id" :img="pokemon.img"/>
            </div>
        </div>
        <div class="button-center">
            <button class="button" @click="getOffset(offset + 25)">Cargar más</button>
        </div>
    </div>
</template>
<style scoped>
.card-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px 80px;
}

@media (max-width: 600px) {
    .card-container {
        grid-template-columns: 1fr;
    }
}

.button-center {
    display: flex;
    justify-content: center;
}

.button {
    background-color: #8567FF;
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    margin-top: 20px;
    width: 200px;
    border: none
}

</style>