<template>
  <div class="search-bar">
    <v-toolbar
      color="var(--lightBlueHibredu)"
      dense
      flat
      rounded
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

<style>
.search-bar input{
  font-family: 'Metropolis Regular';
}
</style>