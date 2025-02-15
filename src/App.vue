<template>
  <div class="app-container">
    <nav>
      <router-link to="/">🏠 Home</router-link> |
      <router-link to="/leaderboard">🏆 Leaderboard</router-link> |
      <router-link to="/game">🎮 Play Game</router-link> <!-- ✅ Link to Game.vue -->
    </nav>

    <router-view></router-view>
  </div>
</template>


<script>
export default {
  data() {
    return {
      playersScores: [
        { name: "Alice", score: 85 },
        { name: "Bob", score: 70 },
        { name: "Charlie", score: 90 },
        { name: "David", score: 60 },
        { name: "Emma", score: 95 },
        { name: "Frank", score: 50 },
      ],
    };
  },
};
</script>

<style>

.app-container {
  text-align: center;
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

body {
  background: linear-gradient(135deg, #08081a, #1a1a40);
  color: white;
  font-family: 'Orbitron', sans-serif;
  margin: 0;
  padding: 0;
}


</style>
