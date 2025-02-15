<template>
  <div class="how-it-works">
    <h1>How It Works</h1>
    <p>This quiz app allows you to test your knowledge with different types of quizzes.</p>
    <ul>
      <li>Multiple Choice Quiz: Select the correct answer from the given options.</li>
      <li>Drag & Drop Quiz: Drag the correct answers to their corresponding places.</li>
    </ul>
    <router-link to="/">Back</router-link>
    <router-link to="/multiple-choice">Next</router-link>
  </div>
</template>

<style>
.how-it-works {
  text-align: center;
  margin-top: 50px;
}
.how-it-works a {
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
</style>
