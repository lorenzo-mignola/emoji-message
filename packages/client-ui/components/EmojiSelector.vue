<template>
  <div class="flex justify-between p-4">
    <EmojiButton emoji="❤" @emojiAdd="sendEmoji" />
    <EmojiButton emoji="👍" @emojiAdd="sendEmoji" />
    <EmojiButton emoji="🎉" @emojiAdd="sendEmoji" />
    <EmojiButton emoji="😄" @emojiAdd="sendEmoji" />
  </div>
</template>

<script setup lang="ts">
import EmojiButton from './EmojiButton.vue';

const props = defineProps<{ ws: WebSocket }>();

function sendEmoji(emoji: string) {
  props.ws.send(emoji);
}
</script>

<style scoped></style>
