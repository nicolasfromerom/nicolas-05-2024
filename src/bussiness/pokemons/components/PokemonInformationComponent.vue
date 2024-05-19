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
                <span>Tipos</span>
                <div v-for="(pokemons, index) in $props.pokemon.types" :key="index">
                    <span>{{ pokemons.type.name }}</span>
                </div>  
            </div>
            <div>
                <span>Stats</span>
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
        width: 150px;
        margin-bottom: 3px;
    }

    .value-stats {
        background-color: #8567FF;
        height: 8px;
        left: 0px;
        position: absolute;
        top: 0px;
    }


</style>

<!-- border-bottom: 2px solid black;
border: 2px solid black;
height: 12px;
position: relative;
width: 100%;


background-color: black;
height: 8px;
left: 0px;
position: absolute;
top: 0px;
width: 25%; -->