<template>
<div class="text-center">
    <v-progress-circular
      :size="70"
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
</style>