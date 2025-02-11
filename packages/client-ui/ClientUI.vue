<script setup lang="ts">
import EmojiList from './components/EmojiList.vue';
import EmojiSelector from './components/EmojiSelector.vue';
import connectToWs from './ws/ws-client';

const props = defineProps<{ color: "red" | "blue" }>();
const emoji = props.color === "red" ? "🔴" : "🔵";

const ws = await connectToWs(props.color);
</script>

<template>
  <main class="min-h-screen flex flex-col">
    <h1 class="w-full flex justify-center py-3 text-2xl font-bold uppercase bg-gray-100 shadow mb-2">{{ emoji }} {{
      props.color }}
      client {{ emoji }}</h1>
    <EmojiList :ws="ws" />
    <EmojiSelector :ws="ws" />
  </main>
</template>

<style scoped></style>
