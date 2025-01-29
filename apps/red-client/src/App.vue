<script setup lang="ts">
import EmojiList from './components/EmojiList.vue';
import EmojiSelector from './components/EmojiSelector.vue';
</script>

<template>
  <main class="min-h-screen flex flex-col grow justify-center items-center">
    <EmojiList />
    <EmojiSelector />
  </main>
</template>

<style scoped></style>
