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

<style>
.logo {
    width: 40%;
}

.logo img{
    width: 100%;
}
@media only screen and (max-width: 1024px){
    .logo {
        width: 80%;
        height: auto;
    }

    .logo img{
        width: 100%;
    }
}
</style>