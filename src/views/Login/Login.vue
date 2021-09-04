<template>
  <div class="general">
    <Logo/>
    <LoginBox/>
  </div>
</template>

<script>
import LoginBox from "../../components/LoginBox"
import Logo from "../../components/logo/Logo"

export default {
    name: 'Registration',

    components: {
        LoginBox, Logo
    },
}
</script>

<style scoped>
.general {
  width: 100%;
  height: 100%;
  background-color: var(--lightBlueHibredu);
  background-image: url(../../assets/images/background.png);
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  text-align: center;
}

@media only screen and (max-width: 1024px){
  .general {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
}
</style>