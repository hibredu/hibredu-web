<template>
    <div class="general">
    <div class="logo">
        <img src="../../assets/images/hibredu-logo.png">
        <RegisterBox/>
    </div>
  </div>
</template>

<script>
import RegisterBox from '../../components/RegisterBox.vue'
export default {
    name:'Register',

    components: {
        RegisterBox
    }
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