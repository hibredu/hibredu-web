<template>
  <div class="general">
    <div class="logo">
        <img src="../../assets/images/hibredu-logo.png">
    </div>
    <LoginBox/>
  </div>
</template>

<script>
import LoginBox from '../../components/LoginBox.vue'

export default {
    name: 'Login',

    components: {
        LoginBox
    },
}
</script>

<style>
.general {
    width: 100%;
    height: 100%;
    background-color: var(--lightBlueHibredu);
    background-image: url(../../assets/images/background.png);
    background-size: cover;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

</style>