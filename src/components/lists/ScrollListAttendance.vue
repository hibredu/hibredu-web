<template>
  <v-card class="scroll-list" flat>
    <h4 class="list-title">Lista de Presença | {{ classroom.name }}
    </h4>
    <div class="header">
      <div class="column-name">
        <h4>#</h4>
      </div>
      <div class="column-name">
        <h4>Nome</h4>
      </div>
      <div class="column-name">
        <h4>Email</h4>
      </div>
      <div class="column-name">
        <h4>Data</h4>
      </div>
      <div class="column-name">
        <h4>Status</h4>
      </div>
    </div>
    <v-list class="content" dense>
      <DefaultLoading class="list-loading" v-if="params.length === 0"/>
      <v-list-item
        v-else
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

        <v-list-item-content>
          <v-list-item-title
            >{{ formatDate(item.created_at) }}
          </v-list-item-title>
        </v-list-item-content>

        <v-list-item-content>
          <v-list-item-title>{{ item.present === true ? "Presente" : "Ausente" }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import globalMethods from "../../mixins/globalMethods";
import DefaultLoading from "../../components/loading/DefaultLoading";

export default {
  name: "ScrollListAttendance",
  mixins: [globalMethods],
  props: ["number", "text", "color", "params", "classroom"],
  components: {
    DefaultLoading
  }
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
  height: 30em;
  width: 100%;
  text-align: left;
  overflow-y: auto;
  padding: 0em 2em 0em 2em;
}

.v-list-item {
  border-bottom: solid 1px var(--lightGrayHibredu);
  width: auto;
}

.header {
  background-color: var(--lightCyanHibredu);
  padding: 0em 2.5em 0em 2.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.column-name {
  width: 20%;
  text-transform: uppercase;
}

.list-loading {
  justify-content: space-around;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: auto;
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