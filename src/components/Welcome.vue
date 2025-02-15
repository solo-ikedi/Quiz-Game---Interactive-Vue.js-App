<template>
  <div class="welcome-container">
    <h1>Welcome to the Vue Quiz App</h1>
    <p>Choose a quiz type to get started:</p>
    <router-link to="/how-it-works">How It Works</router-link>
    <router-link to="/multiple-choice">Multiple Choice Quiz</router-link>
    <router-link to="/drag-drop">Drag & Drop Quiz</router-link>
  </div>
</template>

<style>
.welcome-container {
  text-align: center;
  margin-top: 50px;
}
.welcome-container a {
  display: block;
  margin: 10px;
  padding: 10px;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
</style>
