<template>
  <div class="game-card-wrapper">
    <RouterLink :to="route">
      <div class="img-wrapper">
        <img class="game-img" :src="img" alt="bild" />
      </div>
    </RouterLink>
    <p class="title">&#9655; Play {{ name }}</p>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
defineProps({
  name: { type: String, required: true },
  route: { type: String, required: true },
  img: { type: String, required: false },
});
</script>

<style scoped>
.game-card-wrapper {
  display: grid;
  grid-template-rows: auto 1fr;

  gap: 0.5rem;
  border: 0.2rem solid var(--primary-light);
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: var(--accent-color-one);
}

.game-card-wrapper:hover {
  box-shadow: -0.5rem 0.5rem var(--primary-light);
  transform: translate(0.5rem, -0.5rem);
}
.img-wrapper {
  height: 15rem;
  width: 15rem;
  z-index: 1;
  position: relative;
}

.game-img {
  display: block;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  border-top-right-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
}

.title {
  color: var(--primary-light);
  text-align: center;
  margin: 0.5rem;
  margin-bottom: 1rem;
}
</style>
