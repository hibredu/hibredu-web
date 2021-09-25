<template>
    <div class="logo">
        <img src="../../assets/images/hibredu-logotipo.png">
    </div>
</template>

<script>
export default {
    name: 'Logo'
}
</script>

<style scoped>
.logo {
    width: 40%;
}

.logo img{
    width: 100%;
}
@media only screen and (max-width: 1024px){
    .logo {
        width: auto;
        height: 10em;
    }

    .logo img{
        width: 100%;
    }
}
</style>