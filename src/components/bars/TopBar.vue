<template>
  <div class="blue-bar-top"></div>
</template>

<script>
export default {
  name: "TopBar",
};
</script>

<style scoped>
.blue-bar-top {
  width: 100%;
  height: 400px;
  background-color: var(--blueHibredu);
  position: absolute;
  z-index: -1;
}

@media only screen and (max-width: 1024px) {
  .blue-bar-top {
    width: 100%;
    height: 37%;
    background-color: var(--blueHibredu);
    position: absolute;
    z-index: -1;
  }
}
</style>