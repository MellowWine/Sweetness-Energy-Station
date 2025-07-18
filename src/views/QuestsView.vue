<template>
  <div>
    <h1>可以捕获的星星 ✨</h1>
    <div class="card-grid">
      <div v-for="quest in store.availableQuests" :key="quest.id" class="card quest-card">
        <div class="quest-icon">{{ quest.icon }}</div>
        <h2>{{ quest.name }}</h2>
        <p>{{ quest.description }}</p>
        <div class="quest-footer">
          <span class="points">+{{ quest.points }} ❤️</span>
          <button @click="handleComplete(quest.id)" class="btn btn-primary">我完成啦！</button>
        </div>
      </div>
    </div>
    <div v-if="store.availableQuests.length === 0" class="empty-state card">
      <h2>太棒了！</h2>
      <p>所有的冒险都已完成，公主殿下对你非常满意！💖</p>
    </div>
  </div>
</template>

<script setup>
import { useLoveStore } from '@/stores/loveStore';
const store = useLoveStore();

function handleComplete(questId) {
  store.completeQuest(questId);
}
</script>

<style scoped>
.quest-card {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.quest-icon {
  font-size: 3rem;
  line-height: 1;
  margin-bottom: 1rem;
}

.quest-card h2 {
  font-size: 1.5rem;
  color: #be185d;
  margin: 0 0 0.5rem 0;
}

.quest-card p {
  flex-grow: 1;
  color: #86198f;
  margin-bottom: 1.5rem;
}

.quest-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #fce7f3;
  padding-top: 1rem;
  margin-top: auto;
}

.points {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ec4899;
}

.empty-state {
  text-align: center;
  padding: 3rem;
}
</style>