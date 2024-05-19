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
                <img :src="$props.pokemon.img" alt="">
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
        width: 150px;
        height: 200px;
        border: solid 1px #e2e2e2;
    }

    .pokemon-card img {
        width: 100%;
        max-width: 250px;
        background-color: #e2e2e2
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

</style>