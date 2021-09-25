<template>
  <v-card class="scroll-list" flat>
    <h4 class="list-title">Atividades</h4>
    <div class="header">
        <div v-for="(item, i) in header" :key="i" class="column-name">
            <h4 >{{ item.title }}</h4>
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
          <v-list-item-title
            >{{ formatDate(item.created_at) }}
          </v-list-item-title>
        </v-list-item-content>

        <v-list-item-content>
          <v-list-item-title>{{ item.status }}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-content>
          <v-list-item-title>{{ item.grade }}/{{ item.max_note }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import globalMethods from "../../mixins/globalMethods";
export default {
  name: "ScrollList",
  mixins: [globalMethods],
  props: ["number", "text", "color", "params", "header"],
};
</script>

<style scoped>
.scroll-list {
  font-family: "Metropolis Regular";
  width: 100%;
  height: auto;
  text-transform: capitalize;
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
    width: 20%;
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