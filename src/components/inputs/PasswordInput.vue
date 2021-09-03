<template>
  <div class="password-input">
    <v-form color="var(--yellowHibredu)">
        <v-text-field
            solo
            flat
            background-color="var(--lightGrayHibredu)"
            color="var(--yellowHibredu)"
            :prepend-inner-icon="ico"
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
            :placeholder="text"
        >
        </v-text-field>
    </v-form>
  </div>
</template>

<script>
export default {
    props: [ "ico", "text" ],

    data () {
      return {
        show1: false,
        password: '',
        rules: {
          required: value => !!value || 'A senha é obrigatória',
          min: v => v.length >= 8 || 'Minímo 8 caracteres',
          emailMatch: () => (`The email and password you entered don't match`),
        },
      }
    },
  }
</script>

<style scoped>
.password-input {
  font-family: 'Metropolis Regular';
}
</style>