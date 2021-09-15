<template>
 
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="var(--yellowHibredu)"
          fab
          dark
          v-bind="attrs"
          v-on="on">
          V
        </v-btn>
      </template>
      <v-list>
        <v-list-item link
          v-for="(item, index) in items"
          :key="index"
          :to="{ name: item.route}">
          <v-list-item-icon>
            <v-icon color="var(--grayHibredu)">
              {{ item.ico }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-title color="var(--grayHibredu)">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

</template>

<script>
  export default {
    data: () => ({
      items: [
        { ico: 'mdi-account-circle', title: 'Meu Perfil', route: "home" },
        { ico: 'mdi-exit-to-app', title: 'Sair', route: "login" },
      ],
    }),
  }
</script>

<style scoped>
* {
  font-family: 'Metropolis Regular';
  color: var(--grayHibredu);
}

.v-list-item {
  background-color: var(--whiteHibredu);
}

.v-list-item:hover {
  background-color: var(--lightGrayHibredu);
}
</style>