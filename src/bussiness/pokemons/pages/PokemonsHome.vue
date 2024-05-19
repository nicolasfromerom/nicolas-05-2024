<script setup lang="ts">
import PokemonCardComponent from '../components/PokemonCardComponent.vue';
import { usePokemonsComposables } from '../composables/usePokemonsComposable';

const { pokemons, isLoading, getOffset,createTeam, offset } = usePokemonsComposables();

</script>

<template>
    <div>
        <h1 v-if="isLoading">Cargando...</h1>
        <div class="card-container">
            <div v-for="pokemon in pokemons" :key="pokemon.id" class="container-info">
                <button v-if="pokemon.isSelected" class="btn-floating btn-select">
                    <i class="material-icons">{{pokemon.id}}</i>
                </button>
                <PokemonCardComponent
                    :pokemon="pokemon"
                    class="pokemon-card"
                    @click="createTeam(pokemon)"
                />
            </div>
        </div>
        <div class="button-center" v-if="offset < 150">
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
    border: none;
    cursor: cursor;
}

.btn-select {
    position: absolute;
    top: 5px;
    right: 5px;
    border: 1px solid green;
    color: green;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
}

.container-info {
    position: relative;
}

</style>