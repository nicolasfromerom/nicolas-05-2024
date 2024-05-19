<script setup lang="ts">
import PokemonCardComponent from '../components/PokemonCardComponent.vue';
import PokemonInformationComponent from '../components/PokemonInformationComponent.vue';
import { usePokemonsComposables } from '../composables/usePokemonsComposable';

const { pokemonSelect } = usePokemonsComposables();


</script>

<template>
    <div>
        <div class="card-container">
            <PokemonCardComponent 
                :pokemon="pokemonSelect"
            />
            <PokemonInformationComponent :pokemon="pokemonSelect"/>
        </div>
    </div>
</template>

<style scoped>
.card-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px 80px;
}
</style>