<template>
  <div class="h-full grow">
    <span v-for="emoji in emojiList.list" :key="emoji" class="text-3xl" :style="randomPosition()">{{ emoji }}</span>
  </div>
</template>

<script setup lang="ts">
import { useEmojiList } from '../store/emoji-list';

const emojiList = useEmojiList();

function randomPosition() {
  const randomTop = Math.floor(Math.random() * 100);
  const randomLeft = Math.floor(Math.random() * 100);
  return "position: sticky; top: " + randomTop + "%; left: " + randomLeft + "%;";
}
</script>

<style scoped></style>
