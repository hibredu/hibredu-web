<template>
  <div class="search-bar">
    <v-toolbar
      color="var(--lightBlueHibredu)"
      dense
      flat
      class="search-bar rounded-pill"
    >
      <v-btn icon color="var(--grayHibredu)">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <input type="text" placeholder="Pesquisar"/>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
}
</script>

<style scoped>
div {
  color: var(--grayHibredu);
}

.search-bar input{
  width: 40%;
  font-family: 'Metropolis Regular';
  @media (max-width: 400px) {
      width: 10%;
  }
}

</style>