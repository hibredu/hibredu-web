<template>
<div class="text-center">
    <v-progress-circular
      :size="50"
      indeterminate
      color="var(--yellowHibredu)"
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
    name: 'DefaultLoading',
}
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}

.text-center {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>