<script setup lang="ts">
import type { Pokemons } from '../interfaces/pokemons.interface';

interface Pokemon {
    pokemon: Pokemons
}

defineProps<Pokemon>()

</script>

<template>
    <div>
        <section class="pokemon-card">
            <div class="pokemon-img">
                <img :src="$props.pokemon.img" :alt="$props.pokemon.name" :class="{'pokemon-selected': $props.pokemon.isSelected}">
            </div>
            <div class="pokemon-name">
                <span>{{ $props.pokemon.name }}</span>
            </div>
        </section>
    </div>
</template>
<style scoped>
    .pokemon-card {
        text-transform: uppercase;
        width: 200px;
        height: 250px;
        border: solid 1px #e2e2e2;
    }

    .pokemon-card img {
        width: 100%;
        max-width: 200px;
        background-color: #8567FF
    }

    .pokemon-name {
        display: flex;
        justify-content: center;
        padding: 10px;
        font-weight: bolder;
    }

    .pokemon-name span {
        font-weight: bold;
    }

    img:hover {
        background-color: #8567FF;
    }

    .pokemon-selected {
        background-color: #8567FF;
    }
</style>