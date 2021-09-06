<template>
  <div class="lateral-menu">
    <v-navigation-drawer
      permanent
      expand-on-hover
      width="250"
    >
      <v-list nav dense>
        <v-list-item class="logo">
          <v-list-item-icon>
            <v-img src="../assets/images/hibredu-logotipo.png" height="40" class="ml-auto"></v-img>
          </v-list-item-icon>
        </v-list-item>

        <v-list-item link
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
        <v-list-group
          prepend-icon="mdi-google-analytics"
          color="var(--grayHibredu)"
        >
          <template v-slot:activator>
            <v-list-item-title>Análise</v-list-item-title>
          </template>
          
          <v-list-group
            no-action
            sub-group
            prepend-icon="mdi-account-group"
          > 
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Turma</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-group>
          <v-list-group
            no-action
            sub-group
            prepend-icon="mdi-account "
            color="var(--grayHibredu)"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Aluno</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-group>
        </v-list-group>
        <v-list-group
          color="var(--grayHibredu)"
          prepend-icon="mdi-cloud-download"
        >
          <template v-slot:activator>
            <v-list-item-title>Exportar</v-list-item-title>
          </template>
          
          <v-list-group
            no-action
            sub-group
            prepend-icon="mdi-clipboard-list-outline"
            color="var(--grayHibredu)"
          > 
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Atividades</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-group>
          <v-list-group
            no-action
            sub-group
            prepend-icon="mdi-list-status"
            color="var(--grayHibredu)"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Presença</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { ico: 'mdi-home', title: 'Home' },
        { ico: 'mdi-cloud-upload', title: 'Importar' },
      ],
    }),
  }
</script>

<style scoped>
div {
  color: var(--grayHibredu);
  font-family: 'Metropolis Regular';
}

</style>