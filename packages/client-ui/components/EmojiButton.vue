<template>
  <button @click="add"
    class="text-3xl m-9 rounded-2xl border-3 p-5 shadow hover:cursor-pointer hover:bg-gray-200 border-gray-400">
    {{ props.emoji }}
  </button>
</template>

<script setup lang="ts">
import { useEmojiList } from '../store/emoji-list';

const { addEmoji } = useEmojiList();

const props = defineProps<{ emoji: string }>()

function add() {
  addEmoji(props.emoji)
}
</script>
