<template>
  <div class="welcome-bar">Olá {{ teacher_name }}!</div>
</template>

<script>
export default {
  name: "WelcomeBar",
  data() {
    return {
      teacher_name: localStorage.getItem("teacher_name"),
    };
  },
};
</script>

<style scoped>
.welcome-bar {
  font-family: "Metropolis Regular";
  color: var(--whiteHibredu);
  font-size: 1.3em;
}
</style>