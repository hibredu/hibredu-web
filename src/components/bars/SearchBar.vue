<template>
  <div class="search-bar">
    <v-toolbar
      color="var(--lightBlueHibredu)"
      dense
      flat
      class="search-bar rounded-pill"
    >
      <v-btn @click.native="search" fab icon small color="var(--grayHibredu)">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <input v-model="filter" type="text" placeholder="Pesquisar" />
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      filter: "",
    };
  },
  methods: {
    search() {
      console.log(this.filter);
    },
  },
};
</script>

<style scoped>
div {
  color: var(--grayHibredu);
}

.search-bar input {
  width: 100%;
  font-family: "Metropolis Regular";
  outline: none;
}
</style>