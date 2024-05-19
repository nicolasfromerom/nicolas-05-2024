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

</style>