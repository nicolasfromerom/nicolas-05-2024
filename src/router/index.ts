import { createRouter, createWebHistory } from 'vue-router'
import PokemonsHome from '@/bussiness/pokemons/pages/PokemonsHome.vue'
import PokemonsLayout from '@/bussiness/pokemons/layouts/PokemonsLayout.vue'
import PokemonsTeam from '@/bussiness/pokemons/pages/PokemonsTeam.vue'
import PokemonDetail from '@/bussiness/pokemons/pages/PokemonDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PokemonsLayout,
      children: [
        {
          path: '',
          name: 'pokemons-home',
          component: PokemonsHome
        }
      ]
    },
    {
      path: '/team',
      name: 'team',
      component: PokemonsLayout,
      children: [
        {
          path: '',
          name: 'pokemons-team',
          component: PokemonsTeam
        },
        {
          path: ':id',
          name: 'pokemons-detail',
          component: PokemonDetail
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
  ]
})

export default router
