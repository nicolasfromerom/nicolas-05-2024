<script setup lang="ts">
</script>

<template>
    <div>
        <section class="pokemon-card">
            <div class="pokemon-img">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png" alt="">
            </div>
            <div class="pokemon-name">
                <span>Pikachu</span>
            </div>
        </section>
    </div>
</template>
<style scoped>
    .pokemon-card {
        border-radius: 10px;
        box-shadow: 2px 2px 10px 2px rgb(0 0 0 / 25%);
        text-transform: uppercase;
        position: relative;
    }

    .pokemon-card img {
        width: 100%;
        max-width: 250px;
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