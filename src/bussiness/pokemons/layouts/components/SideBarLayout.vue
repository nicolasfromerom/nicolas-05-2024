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
    div {
        display: flex;
    }

    .main {
        margin-top: 50px;
    }

    .sidebar {
        width: 300px;
        height: calc(100vh - 60px);
        padding: 20px;
        box-shadow: 5px 0 10px rgba(0, 0, 0, 0.3);
        margin-right: 100px
    }

</style>