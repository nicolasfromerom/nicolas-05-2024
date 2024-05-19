<script setup lang="ts">
import PokemonCardComponent from '../components/PokemonCardComponent.vue';
import { usePokemonsComposables } from '../composables/usePokemonsComposable';

const { teamPokemons } = usePokemonsComposables();

</script>

<template>
    <div>
        <div class="card-container">
            <div v-for="pokemon in teamPokemons" :key="pokemon.id" >
                <PokemonCardComponent 
                    :pokemon="pokemon"
                />
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
</style>