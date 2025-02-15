<template>
  <div class="game">
    <h2>Quiz Game</h2>
    <p>Time Left: {{ timeLeft }} seconds</p>
    <button @click="startQuiz">Start Quiz</button>

    <p>Your Score: {{ currentScore }}</p>
    <p>Achievement: {{ achievement }}</p>
    <button @click="increaseScore">Answer Correctly</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeLeft: 60, // Countdown Timer
      currentScore: 0,
    };
  },
  computed: {
    achievement() {
      if (this.currentScore >= 50) return "🏅 Gold";
      if (this.currentScore >= 30) return "🥈 Silver";
      if (this.currentScore >= 10) return "🥉 Bronze";
      return "👶 Beginner";
    },
  },
  methods: {
    startQuiz() {
      this.$router.push("/multiple-choice"); // Redirects to quiz
    },
    increaseScore() {
      this.currentScore += 10;
    },
  },
};
</script>

<style scoped>
.game {
  text-align: center;
  background: linear-gradient(135deg, #007bff, #6610f2);
  padding: 20px;
  border-radius: 10px;
  color: white;
}

button {
  background: yellow;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background: orange;
}
</style>
