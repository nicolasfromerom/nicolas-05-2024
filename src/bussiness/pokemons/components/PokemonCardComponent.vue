<script setup lang="ts">
import type { Pokemons } from '../interfaces/pokemons.interface';

defineProps<Pokemons>()

</script>

<template>
    <div>
        <section class="pokemon-card">
            <div class="pokemon-img">
                <img :src="$props.img" alt="">
            </div>
            <div class="pokemon-name">
                <span>{{ $props.name }}</span>
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

    .pokemon-card:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        border: solid 2px #8567FF;
    }

</style>