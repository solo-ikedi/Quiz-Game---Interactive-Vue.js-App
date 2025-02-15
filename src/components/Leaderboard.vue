<template>
  <div class="leaderboard">
    <h2>Leaderboard</h2>
    <ul>
      <li v-for="(player, index) in sortedScores" :key="index">
        {{ player.name }} - {{ player.score }} points
      </li>
    </ul>
  </div>
</template>

<script>
import { useGameStore } from "../store/store"; // ✅ Import store

export default {
  setup() {
    const store = useGameStore();
    return { scores: store.playersScores };
  },
  computed: {
    sortedScores() {
      return this.scores.sort((a, b) => b.score - a.score).slice(0, 5); // ✅ Show top 5
    },
  },
};
</script>

<style scoped>
/* Cool Background */
.leaderboard {
  text-align: center;
  padding: 20px;
  background: rgba(26, 26, 26, 0.9);
  color: white;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.4);
  max-width: 450px;
  margin: auto;
  margin-top: 50px;
  font-family: 'Orbitron', sans-serif; /* 🔥 Futuristic Font */
  animation: fadeIn 1s ease-in-out;
}

/* Neon List */
ul {
  list-style: none;
  padding: 0;
}

li {
  background: linear-gradient(135deg, #00eaff, #007fff);
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 12px;
  border-radius: 8px;
  margin: 10px 0;
  transition: 0.3s ease-in-out;
  box-shadow: 0px 5px 15px rgba(0, 234, 255, 0.5);
  animation: glow 1.5s infinite alternate;
}

li:hover {
  transform: translateY(-2px);
  box-shadow: 0px 10px 20px rgba(0, 234, 255, 0.8);
}

/* Buttons */
button {
  background: linear-gradient(135deg, #ff007f, #ff00ff);
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 5px 15px rgba(255, 0, 127, 0.5);
  font-family: 'Orbitron', sans-serif;
}

button:hover {
  background: linear-gradient(135deg, #ff00ff, #ff007f);
  transform: translateY(-2px);
  box-shadow: 0px 10px 20px rgba(255, 0, 127, 0.8);
}

/* Animations */
@keyframes glow {
  from {
    box-shadow: 0px 5px 15px rgba(0, 234, 255, 0.5);
  }
  to {
    box-shadow: 0px 10px 25px rgba(0, 234, 255, 0.9);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
