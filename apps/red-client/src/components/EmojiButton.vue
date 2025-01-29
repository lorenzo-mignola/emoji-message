<template>
  <button @click="add" class="text-3xl m-9 rounded-2xl border-1 p-5 shadow hover:cursor-pointer hover:bg-gray-700">{{
    emoji }}</button>
</template>

<script setup lang="ts">
import { useEmojiList } from '../store/emoji-list';

const { addEmoji } = useEmojiList();

const props = defineProps({
  emoji: {
    type: String,
    required: true
  }
})

function add() {
  addEmoji(props.emoji)
}
</script>
