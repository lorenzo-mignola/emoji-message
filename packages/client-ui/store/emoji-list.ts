import { defineStore } from 'pinia'

export const useEmojiList = defineStore('emoji', {
  state: () => ({ list: [] as string[] }),
  actions: {
    addEmoji(emoji: string) {
      this.list = [...this.list, emoji]
    },
  },
})
