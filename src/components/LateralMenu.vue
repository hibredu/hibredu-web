<template>
  <div class="lateral-menu">
    <v-navigation-drawer permanent expand-on-hover width="250">
      <v-list nav dense>
        <v-list-item class="logo">
          <v-list-item-icon>
            <v-img
              src="../assets/images/hibredu-logotipo.png"
              height="40"
            ></v-img>
          </v-list-item-icon>
        </v-list-item>

        <v-list-item
          :to="item.route"
          link
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-icon>
            <v-icon color="var(--grayHibredu)">{{ item.ico }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title color="var(--grayHibredu)">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>

        <v-list-group color="var(--grayHibredu)">
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon color="var(--grayHibredu)">mdi-google-analytics</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Análise</v-list-item-title>
          </template>

          <v-list-item :to="`home`" link>
            <v-list-item-icon>
              <v-icon left color="var(--grayHibredu)">mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-title color="var(--grayHibredu)">
              Turma
            </v-list-item-title>
          </v-list-item>

          <v-list-item :to="`home`" link>
            <v-list-item-icon>
              <v-icon left color="var(--grayHibredu)">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title color="var(--grayHibredu)">
              Aluno
            </v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group color="var(--grayHibredu)">
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon color="var(--grayHibredu)">mdi-cloud-download</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Exportar</v-list-item-title>
          </template>

          <v-list-item :to="`home`" link :key="index">
            <v-list-item-icon>
              <v-icon left color="var(--grayHibredu)">mdi-clipboard-list-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title color="var(--grayHibredu)">
              Atividades
            </v-list-item-title>
          </v-list-item>

          <v-list-item :to="`home`" link :key="index">
            <v-list-item-icon>
              <v-icon left color="var(--grayHibredu)">mdi-list-status</v-icon>
            </v-list-item-icon>
            <v-list-item-title color="var(--grayHibredu)">
              Presença
            </v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { ico: "mdi-home", title: "Home", route: "home" },
      { ico: "mdi-cloud-upload", title: "Importar", route: "import" },
    ],
  }),
};
</script>

<style scoped>
div {
  color: var(--grayHibredu);
  font-family: "Metropolis Regular";
}
</style>