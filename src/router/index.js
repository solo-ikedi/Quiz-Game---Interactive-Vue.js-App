import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../components/Welcome.vue";
import HowItWorks from "../components/HowItWorks.vue";
import MultipleChoiceQuiz from "../components/MultipleChoiceQuiz.vue";
import DragAndDropQuiz from "../components/DragAndDropQuiz.vue";
import Leaderboard from "../components/Leaderboard.vue";
import Game from "../components/Game.vue"; // ✅ Import Game Component

const routes = [
  { path: "/", component: Welcome },
  { path: "/how-it-works", component: HowItWorks },
  { path: "/multiple-choice", component: MultipleChoiceQuiz },
  { path: "/drag-drop", component: DragAndDropQuiz },
  { path: "/leaderboard", component: Leaderboard },
  { path: "/game", component: Game }, // ✅ Define the route for Game.vue
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
