<template>
  <div>
    <v-checkbox
        v-model="checkbox"
        :label="text"
        required
        color="var(--yellowHibredu)"
    ></v-checkbox>
  </div>
</template>

<script>
export default {
    name: 'CheckBox',
    props: [ "text" ],
}
</script>

<style>

</style>