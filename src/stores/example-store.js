import { defineStore } from 'pinia';

export const useAppStore = defineStore('AppStore', {
  state: () => ({
    tamanyFont: 20,
  }),
  getters: {
    doubleCount: (state) => state.tamanyFont * 2,
  },
  actions: {
    increment() {
      this.tamanyFont++;
    },
    decrement() {
      this.tamanyFont--;
    },
  },
});
