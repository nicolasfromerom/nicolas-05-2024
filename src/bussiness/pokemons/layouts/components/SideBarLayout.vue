<script setup lang="ts">

export interface RouterLink {
    path: string;
    title: string;
}

interface PropsRouter {
    links: RouterLink[];
}

defineProps<PropsRouter>()



</script>

<template>
    <div>
        <section class="sidebar">
            
        <RouterLink 
            v-for="link of $props.links"
            :key="link.path"
            :to="link.path">
            {{ link.title }}
        </RouterLink>
        </section>
        <section class="main">
            <RouterView />
        </section>
    </div>
</template>

<style scoped>

    .main {
        margin-top: 110px;
        margin-left: 350px;
        margin-bottom: 30px
    }

    .sidebar {
        box-shadow: 5px 0 10px rgba(0, 0, 0, 0.3);
        margin-top: 60px;
        position: fixed;
        top: 0;
        left: 0;
        width: 250px;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
    }

</style>