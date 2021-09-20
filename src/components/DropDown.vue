<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-avatar color="var(--yellowHibredu)" fab v-bind="attrs" v-on="on">
        <span class="white--text text-6">{{ teacher_initial }}</span>
      </v-avatar>
    </template>
    <v-list>
      <v-list-item
        link
        v-for="(item, index) in items"
        :key="index"
        :to="{ name: item.route }"
      >
        <v-list-item-icon>
          <v-icon color="var(--grayHibredu)">
            {{ item.ico }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-title color="var(--grayHibredu)">{{
          item.title
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    items: [
      { ico: "mdi-account-circle", title: "Meu Perfil", route: "home" },
      { ico: "mdi-exit-to-app", title: "Sair", route: "login" },
    ],
    teacher_initial: ''
  }),
  mounted() {
    this.teacher_initial = localStorage.getItem('teacher_name').substr(0, 1);
  }
};
</script>

<style scoped>
* {
  font-family: "Metropolis Regular";
  color: var(--grayHibredu);
}

.v-list-item {
  background-color: var(--whiteHibredu);
}

.v-list-item:hover {
  background-color: var(--lightGrayHibredu);
}
</style>