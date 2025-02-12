<template>
  <div class="h-full grow">
    <span v-for="emoji in emojiList.list" :key="emoji" class="text-3xl" :style="randomPosition()">{{ emoji }}</span>
  </div>
</template>

<script setup lang="ts">
import { useEmojiList } from '../store/emoji-list';

const props = defineProps<{ ws: WebSocket }>();
const { setEmojiList } = useEmojiList();

props.ws.onmessage = (event) => {
  const emojiListString = event.data || "";
  const emojiList = emojiListString.split("|");
  setEmojiList(emojiList);
};

const emojiList = useEmojiList();

function randomPosition() {
  const randomTop = Math.floor(Math.random() * 100);
  const randomLeft = Math.floor(Math.random() * 100);
  return "position: sticky; top: " + randomTop + "%; left: " + randomLeft + "%;";
}
</script>

<style scoped></style>
