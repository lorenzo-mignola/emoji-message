<template>
  <div class="h-full">
    <span v-for="emoji in emojiList.list" :key="emoji" class="text-3xl">{{ emoji }}</span>
  </div>
</template>

<script setup lang="ts">
import { useEmojiList } from '../store/emoji-list';

const emojiList = useEmojiList();
</script>

<style scoped></style>
