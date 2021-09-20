<template>
  <div class="date-filter">
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
      prefix="Data Inicial"
      @change="$emit('update:value', filter)"
    />
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
      prefix="Data Final"
      @change="$emit('update:value', filter)"
    />
  </div>
  
</template>

<script>
export default {
  name: "DateFilter",
  props: ["label", "items", "text"],
  data() {
    return {
      filter: null,
    };
  },
};
</script>

<style scoped>
.date-filter {
  width: 13em;
  font-family: "Metropolis Regular";
      display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media only screen and (max-width: 1024px) {
  .date-filter {
    width: 10em;
  }
}
</style>