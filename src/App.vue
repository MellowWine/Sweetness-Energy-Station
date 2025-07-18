<template>
  <header>
    <nav>
      <div class="logo">The Love Hub ❤️</div>
      <div>
        <RouterLink to="/">爱情枢纽 The Love Hub</RouterLink>
        <RouterLink to="/quests">甜蜜任务板 Sweet Quests Page</RouterLink>
        <RouterLink to="/boutique">心愿精品店 Wish Boutique Page</RouterLink>
        <RouterLink to="/timeline">我们的时光机 Memory Lane</RouterLink>
      </div>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>