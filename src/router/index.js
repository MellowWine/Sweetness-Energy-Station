import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuestsView from '../views/QuestsView.vue'
import BoutiqueView from '../views/BoutiqueView.vue'
import TimelineView from '../views/TimelineView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/quests',
      name: 'quests',
      component: QuestsView
    },
    {
      path: '/boutique',
      name: 'boutique',
      component: BoutiqueView
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: TimelineView
    }
  ]
})

export default router