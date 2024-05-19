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
    <nav class="navbar">
        <RouterLink 
            v-for="link of $props.links"
            :key="link.path"
            :to="link.path">
            {{ link.title }}
        </RouterLink>
    </nav>
    <div>
        <section class="main">
            <RouterView />
        </section>
    </div>
</template>

<style scoped>
    .navbar {
        position: fixed;
        top: 0;
        background-color: #8567FF;
        color: white;
        text-align: center;
        padding: 20px;
        height: 60px;
        width: 100%;
        z-index: 1000;
    }

    div .main {
        display: flex;
        justify-content: center;
    }

    .main {
        width: 100%;
        margin-top: 110px;
        margin-bottom: 30px;
    }
    
    a {
        color: white;
        text-decoration: none;
        margin: 0 10px;
    }

    .router-link-active{
        text-decoration: underline;
    }

</style>