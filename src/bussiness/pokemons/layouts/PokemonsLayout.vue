<script setup lang="ts">
import PokemonsHeaderLayout from '../layouts/components/PokemonsHeaderLayout.vue';
import SideBarLayout from '../layouts/components/SideBarLayout.vue';
import pokemonsRouter from '../router';
</script>

<template>
    <div>
        <PokemonsHeaderLayout />
        <SideBarLayout :links="pokemonsRouter" />
    </div>
</template>