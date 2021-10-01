<template>
  <v-card class="scroll-list" flat>
    <h4 class="list-title">Alunos</h4>
    <div class="header">
      <div class="column-name">
        <h4>Id</h4>
      </div>
      <div class="column-name">
        <h4>Nome</h4>
      </div>
      <div class="column-name">
        <h4>E-mail</h4>
      </div>
    </div>
    <v-list class="content" dense>
      <v-list-item
        v-for="(item, i) in params"
        :key="i"
        :disabled="true"
        style="color: var(--blackHibredu) !important"
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.id }}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-content>
          <v-list-item-title>{{ item.email }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import globalMethods from "../../mixins/globalMethods";
export default {
  name: "ScrollListStudent",
  mixins: [globalMethods],
  props: ["number", "text", "color", "params"],
};
</script>

<style scoped>
.scroll-list {
  font-family: "Metropolis Regular";
  width: 100%;
  height: auto;
}

.list-title {
  padding: 1em;
}

.content {
  height: 18em;
  overflow-y: auto;
}

.v-list-item {
  border-bottom: solid 1px var(--lightGrayHibredu);
}

.header {
  background-color: var(--lightCyanHibredu);
  padding: 0em 0em 0em 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.column-name {
  width: 33%;
  text-transform: uppercase;
}

@media only screen and (max-width: 1024px) {
  .scroll-list {
    font-family: "Metropolis Regular";
    margin-top: 2em;
    width: auto;
    height: auto;
    margin-bottom: 2em;
  }
}
</style>