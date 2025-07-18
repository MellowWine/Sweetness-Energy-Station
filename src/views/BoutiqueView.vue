<template>
    <div>
        <h1>公主的愿望清单 👑</h1>
        <div class="card-grid">
            <div v-for="reward in store.rewards" :key="reward.id" class="card reward-card"
                :class="{ redeemed: reward.redeemed }">
                <div class="reward-image">{{ reward.image }}</div>
                <h2>{{ reward.name }}</h2>
                <div class="reward-footer">
                    <span class="cost">{{ reward.cost }} ❤️</span>
                    <button @click="handleRedeem(reward.id)"
                        :disabled="store.totalPoints < reward.cost || reward.redeemed" class="btn btn-primary">
                        {{ reward.redeemed ? '已兑换' : '立即兑换' }}
                    </button>
                </div>
                <div v-if="!reward.redeemed && store.totalPoints < reward.cost" class="points-needed">
                    还差 {{ reward.cost - store.totalPoints }} ❤️ 能量哦，加油！
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useLoveStore } from '@/stores/loveStore';
const store = useLoveStore();

function handleRedeem(rewardId) {
    store.redeemReward(rewardId);
}
</script>

<style scoped>
.reward-card {
    text-align: center;
    position: relative;
    overflow: hidden;
}

.reward-card.redeemed {
    opacity: 0.6;
    background-color: #f9fafb;
}

.reward-card.redeemed::after {
    content: '✓ 已实现';
    position: absolute;
    top: 10px;
    right: -30px;
    background: #10b981;
    color: white;
    padding: 5px 40px;
    transform: rotate(45deg);
    font-weight: bold;
    font-size: 0.8rem;
}

.reward-image {
    font-size: 4rem;
    margin-bottom: 1rem;
}

.reward-card h2 {
    font-size: 1.5rem;
    color: #be185d;
    margin: 0 0 1.5rem 0;
}

.reward-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #fce7f3;
    padding-top: 1rem;
}

.cost {
    font-size: 1.2rem;
    font-weight: bold;
    color: #ec4899;
}

.points-needed {
    font-size: 0.8rem;
    color: #db2777;
    margin-top: 0.5rem;
    font-weight: 500;
}
</style>