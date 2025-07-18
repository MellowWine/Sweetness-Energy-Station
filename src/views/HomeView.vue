<template>
  <div>
    <!-- 顶部醒目区域 -->
    <div class="top-banner card">
      <div class="users">
        <span class="avatar">{{ store.userMe.avatar }} {{ store.userMe.name }}</span>
        <span class="heart-connector">❤️</span>
        <span class="avatar">{{ store.userHer.avatar }} {{ store.userHer.name }}</span>
      </div>
      <div class="points-display">
        我们的甜蜜能量值：<span>{{ store.totalPoints }}</span> ❤️
      </div>
    </div>

    <!-- 主体内容 -->
    <div class="home-grid">
      <!-- 左侧核心功能 -->
      <div class="main-content">
        <div class="card">
          <h2>甜蜜任务板 (Sweet Quests)</h2>
          <div v-if="store.availableQuests.length > 0">
            <div v-for="quest in store.availableQuests.slice(0, 3)" :key="quest.id" class="list-item">
              <span>{{ quest.icon }} {{ quest.name }}</span>
              <span class="points-badge">+{{ quest.points }} ❤️</span>
            </div>
          </div>
          <p v-else>所有任务都完成啦，太棒了！</p>
          <RouterLink to="/quests" class="view-all">查看全部任务 →</RouterLink>
        </div>

        <div class="card">
          <h2>心愿精品店 (Wish Boutique)</h2>
          <div v-for="reward in store.rewards.filter(r => !r.redeemed).slice(0, 2)" :key="reward.id" class="list-item">
            <span>{{ reward.image }} {{ reward.name }}</span>
            <span class="points-badge">{{ reward.cost }} ❤️</span>
          </div>
          <RouterLink to="/boutique" class="view-all">探索更多心愿 →</RouterLink>
        </div>
      </div>

      <!-- 右侧次要区域 -->
      <div class="sidebar">
        <div class="card">
          <h3>每日情话 ❤️</h3>
          <p class="love-note">"今天也超爱你哦！"</p>
        </div>
        <div class="card">
          <h3>最新动态 ✨</h3>
          <div v-if="store.recentActivity.length > 0">
            <div v-for="activity in store.recentActivity" :key="activity.id" class="activity-item">
              <p><strong>{{ activity.date }}</strong>: {{ activity.description }}</p>
            </div>
          </div>
          <p v-else>还没有动态哦~</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLoveStore } from '@/stores/loveStore';
import { RouterLink } from 'vue-router';
const store = useLoveStore();
</script>

<style scoped>
.top-banner {
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem;
  background: linear-gradient(135deg, #fbcfe8, #fce7f3);
}

.users {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  /* 允许换行 */
  gap: 0.5rem;
}

.avatar {
  background-color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.heart-connector {
  font-size: 2rem;
  margin: 0 1rem;
  color: #f43f5e;
}

.points-display {
  font-size: 1.8rem;
  font-weight: bold;
}

.points-display span {
  color: #ec4899;
  font-size: 2.5rem;
}

.home-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
}

.main-content,
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid #f3f4f6;
  flex-wrap: wrap;
  /* 允许换行 */
  gap: 0.5rem;
}

.list-item:last-child {
  border-bottom: none;
}

.points-badge {
  background-color: #fce7f3;
  color: #db2777;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-weight: 500;
}

.view-all {
  display: block;
  margin-top: 1rem;
  text-align: right;
  color: #db2777;
  font-weight: bold;
  text-decoration: none;
}

.love-note {
  font-style: italic;
  font-size: 1.1rem;
  text-align: center;
}

.activity-item p {
  margin: 0.5rem 0;
  line-height: 1.5;
}

/* --- RESPONSIVE STYLES for HomeView --- */
@media (max-width: 900px) {
  .home-grid {
    grid-template-columns: 1fr;
    /* 关键：从两列布局变为单列布局 */
  }

  .top-banner {
    padding: 1.5rem;
  }

  .users {
    flex-direction: column;
    /* 用户头像垂直排列 */
    gap: 0.75rem;
  }

  .heart-connector {
    transform: rotate(90deg);
    /* 让爱心旋转90度适应垂直布局 */
  }

  .points-display {
    font-size: 1.3rem;
    /* 减小能量值字号 */
  }

  .points-display span {
    font-size: 2rem;
    /* 减小能量值数字字号 */
  }
}
</style>