import { defineStore } from 'pinia'

export const useEmojiList = defineStore('emoji', {
  state: () => ({ list: [] as string[] }),
  actions: {
    setEmojiList(list: string[]) {
      this.list = list
    }
  },
})
