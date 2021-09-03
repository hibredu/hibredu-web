<template>
  <v-card class="login">
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
            v-model="name"
            :rules="nameRules"
            label="E-mail"
            required
            ></v-text-field>

            <v-text-field
            v-model="email"
            :rules="emailRules && [v => !!v || 'Item is required']"
            label="Senha"
            required
            ></v-text-field>

            <v-checkbox
                v-model="checkbox"
                label="Lembrar login"
                required
            ></v-checkbox>

            <NormalButton :text="Login"/>
        </v-form>
    </v-card>
</template>

<script>
import NormalButton from '../components/buttons/NormalButton'

export default {
    name: 'LoginBox',
    
    components: {
        NormalButton
    },
}
</script>

<style>
.login {
    font-size: 2em;
    width: 30%;
    height: 45%;
    padding: 2%;
    font-family: 'Metropolis Regular';
}
</style>