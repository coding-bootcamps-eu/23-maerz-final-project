import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/games",
      name: "allGames",
      component: () => import("@/views/AllGamesView.vue"),
    },
    {
      path: "/highscores",
      name: "Highscores",
      component: () => import("@/views/HighscoresAllView.vue"),
    },
    {
      path: "/games/memory",
      name: "memoryGame",
      component: () => import("@/views/MemoryView.vue"),
    },
    {
      path: "/games/rock-paper-scissors",
      name: "RockPaperScissorsGame",
      component: () => import("@/views/RPSView.vue"),
    },
    {
      path: "/games/hangman",
      name: "hangmanGame",
      component: () => import("@/views/HangmanView.vue"),
    },
    {
      path: "/games/tetris",
      name: "TetrisGame",
      component: () => import("@/views/TetrisView.vue"),
    },
    {
      path: "/games/whack-a-mole",
      name: "WhackAMole",
      component: () => import("@/views/WhackAMoleView.vue"),
    },
    {
      path: "/account",
      name: "accountPage",
      component: () => import("@/views/AccountView.vue"),
    },
  ],
});

export default router;
