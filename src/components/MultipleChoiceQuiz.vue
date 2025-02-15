<template>
  <div class="quiz-container">
    <h1>Multiple Choice Quiz</h1>
    <div class="quiz">
      <h2>Multiple Choice Quiz</h2>
      <div v-for="(question, index) in questions" :key="index">
        <p>{{ question.text }}</p>
        <button v-for="(option, optIndex) in question.options" 
                :key="optIndex" 
                @click="checkAnswer(index, option)" 
                :class="{ correct: option === question.correct && selected[index] === option, 
                          incorrect: option !== question.correct && selected[index] === option }">
          {{ option }}
        </button>
      </div>
    </div>
    <div class="navigation">
      <router-link to="/how-it-works" class="nav-button">Back</router-link>
      <router-link to="/drag-drop" class="nav-button">Next</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        { text: 'What is 2 + 2?', options: ['3', '4', '5'], correct: '4' },
        { text: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris'], correct: 'Paris' },
      ],
      selected: {},
      currentScore: 0, // ✅ Add user's score
    };
  },
  methods: {
    checkAnswer(index, option) {
      this.selected[index] = option;
      
      if (option === this.questions[index].correct) {
        this.currentScore += 10;
      } else {
        this.currentScore -= 5;
      }
    }
  }
};
</script>

<style>
.quiz-container {
  text-align: center;
  margin-top: 50px;
}
button {
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  border: none;
}
.correct {
  background-color: green;
  color: white;
}
.incorrect {
  background-color: red;
  color: white;
}
.navigation {
  margin-top: 20px;
}
.nav-button {
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
</style>
