import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// 模拟的用户信息
const userHer = { name: '公主殿下', avatar: '🫅' };
const userMe = { name: '骑士大人', avatar: '🤺' };

export const useLoveStore = defineStore('love', () => {
  // --- STATE (数据) ---
  const totalPoints = ref(1250);
  const timeline = ref([
    { id: 1, date: '昨天', description: `${userHer.name} 完成了 '爱心早餐'，为我们的爱情+40能量！`, type: 'quest', photo: null },
    { id: 2, date: '上周', description: `${userHer.name} 兑换了 '电影之夜'，这是我们最棒的回忆！`, type: 'reward', photo: null },
  ]);

  const quests = ref([
    { id: 'q1', name: '情绪垃圾桶', icon: '🫂', description: '在我需要时，给我一个温暖的拥抱和倾听', points: 50, status: 'available' },
    { id: 'q2', name: '惊喜大厨', icon: '🍳', description: '为我做一顿意想不到的美味大餐', points: 80, status: 'available' },
    { id: 'q3', name: '全天候夸夸官', icon: '💖', description: '今天用10句不重样的话赞美我', points: 30, status: 'available' },
    { id: 'q4', name: '爱心早餐', icon: '🥐', description: '为我准备一份充满爱意的早餐', points: 40, status: 'completed' },
  ]);

  const rewards = ref([
    { id: 'r1', name: '女王专属按摩服务', image: '👑', cost: 200, redeemed: false },
    { id: 'r2', name: '周末短途旅行基金', image: '🚗', cost: 1500, redeemed: false },
    { id: 'r3', name: '包办一天家务券', image: '🧹', cost: 300, redeemed: false },
    { id: 'r4', name: '电影之夜', image: '🎬', cost: 150, redeemed: true },
  ]);

  // --- GETTERS (计算属性) ---
  const availableQuests = computed(() => quests.value.filter(q => q.status === 'available'));
  const recentActivity = computed(() => [...timeline.value].reverse().slice(0, 3)); // 显示最新的3条

  // --- ACTIONS (方法) ---
  function completeQuest(questId) {
    const quest = quests.value.find(q => q.id === questId);
    if (quest && quest.status === 'available') {
      quest.status = 'completed';
      totalPoints.value += quest.points;
      
      const newLog = {
        id: Date.now(),
        date: '刚刚',
        description: `${userHer.name} 完成了 ‘${quest.name}’，为我们的爱情+${quest.points}能量！`,
        type: 'quest',
        photo: null
      };
      timeline.value.push(newLog);

      alert(`已发送给 ${userMe.name} 进行闪亮亮的认证！✨\n能量 +${quest.points}！当前总能量：${totalPoints.value}`);
    }
  }

  function redeemReward(rewardId) {
    const reward = rewards.value.find(r => r.id === rewardId);
    if (!reward) return;

    if (reward.redeemed) {
      alert('这个愿望已经被实现过啦！');
      return;
    }

    if (totalPoints.value < reward.cost) {
      alert(`能量不足哦！还差 ${reward.cost - totalPoints.value} ❤️ 能量，加油！`);
      return;
    }

    totalPoints.value -= reward.cost;
    reward.redeemed = true;

    const newLog = {
      id: Date.now(),
      date: '刚刚',
      description: `${userHer.name} 兑换了 ‘${reward.name}’，这是我们最棒的回忆！`,
      type: 'reward',
      photo: null
    };
    timeline.value.push(newLog);

    alert(`恭喜！您已成功兑换【${reward.name}】！\n${userMe.name} 已收到通知，将尽快为您安排！👑`);
  }
  
  function addPhotoToTimeline(timelineId, photoDataUrl) {
    const event = timeline.value.find(e => e.id === timelineId);
    if (event) {
      event.photo = photoDataUrl;
    }
  }

  return { 
    totalPoints, 
    timeline,
    quests,
    rewards,
    userHer,
    userMe,
    availableQuests,
    recentActivity,
    completeQuest,
    redeemReward,
    addPhotoToTimeline
  };
});