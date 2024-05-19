<script setup lang="ts">
import type { Pokemons } from '../interfaces/pokemons.interface';

interface Pokemon {
    pokemon: Pokemons
}

defineProps<Pokemon>()

const playSound = (sound: string) => {
    const audio = new Audio(sound);
    audio.play();
}

</script>

<template>
    <div>
        <section>
            <div>
                <span class="titles">Tipos</span>
                <div class="container">
                    <span v-for="(pokemons, index) in $props.pokemon.types" :key="index" class="container-types">{{ pokemons.type.name }}</span>
                </div> 
            </div>
            <div class="container">
                <span class="titles">Stats</span>
                <button @click="playSound($props.pokemon.cries.latest)">Sonido</button>
            </div>
            <div v-for="(pokemons, index) in $props.pokemon.stats" :key="index">
                <div class="container-stats">
                    <span class="name-stats">
                        {{ pokemons.stat.name }}
                    </span>
                    <div class="square-stats">
                        <span class="value-stats" :style="{ width: `${pokemons.base_stat/2}%` }"></span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
    .name-stats {
        text-transform: uppercase;
    }

    .square-stats{
        border-bottom: 2px solid #8567FF;
        border: 2px solid #8567FF;
        height: 12px;
        position: relative;
        width: 200px;
        margin-bottom: 3px;
    }

    .value-stats {
        background-color: #8567FF;
        height: 8px;
        left: 0px;
        position: absolute;
        top: 0px;
    }

    .container {
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
    }

    .container-types
    {
        background-color: #8567FF;
        border-radius: 20px;
        color: white;
        padding: 5px;
        margin: 5px;
        width: 50%;
        text-align: center;
    }


</style>