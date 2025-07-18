<template>
    <div>
        <h1>我们的时光机 ⏳</h1>
        <div class="timeline-container">
            <div v-for="event in timelineEvents" :key="event.id" class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content card">
                    <div class="timeline-header">
                        <span class="date">{{ event.date }}</span>
                    </div>
                    <p>{{ event.description }}</p>
                    <div v-if="event.photo" class="timeline-photo">
                        <img :src="event.photo" alt="记忆照片">
                    </div>
                    <div v-else class="upload-section">
                        <label :for="'file-' + event.id" class="btn-upload">
                            📷 上传照片，封存此刻
                        </label>
                        <input type="file" :id="'file-' + event.id" @change="handleFileUpload($event, event.id)"
                            accept="image/*" class="file-input">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useLoveStore } from '@/stores/loveStore';
import { computed } from 'vue';

const store = useLoveStore();

// 让最新的事件显示在最上面
const timelineEvents = computed(() => [...store.timeline].reverse());

function handleFileUpload(event, timelineId) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        store.addPhotoToTimeline(timelineId, e.target.result);
    };
    reader.readAsDataURL(file);
}
</script>

<style scoped>
.timeline-container {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
}

.timeline-container::after {
    content: '';
    position: absolute;
    width: 3px;
    background-color: #fbcfe8;
    top: 0;
    bottom: 0;
    left: 20px;
    margin-left: -1.5px;
}

.timeline-item {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 100%;
}

.timeline-dot {
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #ec4899;
    border: 3px solid #fbcfe8;
    top: 25px;
    left: 20px;
    margin-left: -7.5px;
    z-index: 1;
}

.timeline-content {
    margin-left: 25px;
}

.timeline-header .date {
    font-weight: bold;
    color: #be185d;
}

.timeline-photo img {
    max-width: 100%;
    border-radius: 8px;
    margin-top: 1rem;
}

.upload-section {
    margin-top: 1rem;
}

.file-input {
    display: none;
}

.btn-upload {
    display: inline-block;
    background-color: #fdf2f8;
    border: 1px dashed #ec4899;
    color: #ec4899;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
}

.btn-upload:hover {
    background-color: #fce7f3;
}
</style>