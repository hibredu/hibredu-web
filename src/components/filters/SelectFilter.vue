<template>
  <div class="search-filter">
    <v-select
      v-model="filter"
      :items="items"
      item-text="name"
      item-value="id"
      :label="label"
      outlined
      height="auto"
      color="var(--yellowHibredu)"
      persistent-hint
      return-object
      single-line
      dense
      background-color="var(--lightGrayHibredu)"
      item-color="var(--yellowHibredu)"
      :prefix="text"
      @change="$emit('update:value', filter)"
    />
  </div>
</template>

<script>
export default {
  name: "SelectFilter",
  props: ["label", "items", "text"],
  data() {
    return {
      filter: null,
    };
  },
};
</script>

<style scoped>
.search-filter {
  width: 13em;
  font-family: "Metropolis Regular";
  text-transform: capitalize;
}

@media only screen and (max-width: 1024px) {
  .search-filter {
    width: 10em;
  }
}
</style>