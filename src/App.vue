<template>
  <header>
    <nav>
      <div class="logo">The Love Hub ❤️</div>
      <div>
        <RouterLink to="/">仪表盘</RouterLink>
        <RouterLink to="/quests">甜蜜任务</RouterLink>
        <RouterLink to="/boutique">心愿精品</RouterLink>
        <RouterLink to="/timeline">时光机</RouterLink>
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