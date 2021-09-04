<template>
  <div class="drop-down">
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
          :href="link">
          <v-list-item-icon>
            <v-icon color="var(--grayHibredu)">
              {{ item.ico }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-title color="var(--grayHibredu)" class="title">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { ico: 'mdi-account-circle', title: 'Meu Perfil' },
        { ico: 'mdi-exit-to-app', title: 'Sair' },
      ],
    }),
  }
</script>

<style scoped>
div {
  color: var(--grayHibredu);
}

.drop-down {
  font-family: 'Metropolis Regular';
  color: var(--grayHibredu);
}
</style>