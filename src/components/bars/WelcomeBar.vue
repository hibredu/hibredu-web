<template>
  <div class="welcome-bar">
    Olá {{ name }}!
  </div>
</template>

<script>
export default {
    name: "WelcomeBar",
    props: [ "name" ]
}
</script>

<style scoped>
.welcome-bar {
    font-family: "Metropolis Regular";
    color: var(--whiteHibredu);
    font-size: 1.3em;
}
</style>