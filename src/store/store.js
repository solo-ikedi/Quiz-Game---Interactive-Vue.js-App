import { defineStore } from "pinia";

export const useGameStore = defineStore("game", {
  state: () => ({
    playersScores: [
      { name: "Alice", score: 85 },
      { name: "Bob", score: 70 },
      { name: "Charlie", score: 90 },
      { name: "David", score: 60 },
      { name: "Emma", score: 95 },
      { name: "Frank", score: 50 },
    ],
    currentScore: 0, // Track the current player's score
  }),

  actions: {
    increaseScore() {
      this.currentScore += 10;
    },
  },
});
