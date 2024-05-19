<script setup lang="ts">
import PokemonsHeaderLayout from '../layouts/components/PokemonsHeaderLayout.vue';
import pokemonsRouter from '../router';
</script>

<template>
    <div>
        <PokemonsHeaderLayout :links="pokemonsRouter" />
    </div>
</template>