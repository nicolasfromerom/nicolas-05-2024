<script setup lang="ts">
import { useRouter } from 'vue-router';
import PokemonCardComponent from '../components/PokemonCardComponent.vue';
import PokemonInformationComponent from '../components/PokemonInformationComponent.vue';
import { usePokemonsComposables } from '../composables/usePokemonsComposable';
import type { Pokemons } from '../interfaces/pokemons.interface';

const { teamPokemons, setPokemonSelect, deletePokemonTeam } = usePokemonsComposables();
const router = useRouter();
const viewPokemonDetail = (pokemon: Pokemons) => {
    setPokemonSelect(pokemon);
    router.push({ path: `/team/${pokemon.id}` });
};

</script>

<template>
    <div>
        <div class="card-container">
            <div v-for="(pokemon, index) in teamPokemons" :key="index" class="container-info" >
                <button class="btn-floating btn-delete" @click="deletePokemonTeam(pokemon)">
                    <i class="material-icons">x</i>
                </button>
                <PokemonCardComponent @click="viewPokemonDetail(pokemon)" 
                    class="pokemon-card"
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

.pokemon-card:hover {
    cursor: pointer;

}

.container-info {
    position: relative;
}

.btn-delete {
    /* Estilos del botón flotante */
    position: absolute;
    top: 5px;
    right: 5px;
    border: 1px solid red;
    color: red;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
}
  
</style>