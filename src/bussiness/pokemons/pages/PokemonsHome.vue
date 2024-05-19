<script setup lang="ts">
import PokemonCardComponent from '../components/PokemonCardComponent.vue';
import { usePokemonsComposables } from '../composables/usePokemonsComposable';

const { pokemons, isLoading, getOffset,createTeam, offset } = usePokemonsComposables();

</script>

<template>
    <div>
        <h1 v-if="isLoading">Cargando...</h1>
        <div class="card-container">
            <div v-for="pokemon in pokemons" :key="pokemon.id" >
                <PokemonCardComponent
                    :pokemon="pokemon"
                    class="pokemon-card"
                    @click="createTeam(pokemon)"
                />
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

.pokemon-card:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    border: solid 2px #8567FF;
}

a {
    text-decoration: none;
    color: black;
}

</style>