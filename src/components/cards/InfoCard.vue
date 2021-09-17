<template>
  <v-card class="info-card" flat>
    <div class="content">
      <h4 class="card-title" :style="color">
        {{ number }}
      </h4>
      <h6 class="sub-title">
        {{ text }}
      </h6>
    </div>  
  </v-card>
</template>

<script>
export default {
  name: 'InfoCard',
  props: [ "number", "text", "color" ],
}
</script>

<style scoped>
.info-card {
  width: 20%;
  height: auto;
  font-family: 'Metropolis Regular';
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.content {
  width: 60%;
  height: auto;
}

.card-title {
  font-size: 4em;
}

.sub-title {
  font-size: 1em;
  font-family: 'Metropolis Thin';
}

@media only screen and (max-width: 1024px){
  .info-card {
    width: auto;
    height: auto;
    font-family: 'Metropolis Regular';
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 1em;
  }

  .content {
    width: auto;
    height: auto;
  }

  .card-title {
    color: var(--darkBlueHibredu);
    font-size: 2em;
  }

  .sub-title {
    font-size: 1em;
    font-family: 'Metropolis Thin';
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1440px){
  .info-card {
    width: auto;
    height: auto;
    font-family: 'Metropolis Regular';
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 1em 0em 1em 0em;
  }

  .content {
    width: auto;
    height: auto;
  }

  .card-title {
    color: var(--darkBlueHibredu);
    font-size: 4em;
  }

  .sub-title {
    font-size: 1em;
    font-family: 'Metropolis Thin';
  }
}

@media only screen and (max-width: 1440px){
  .info-card {
    width: 20em;
    height: auto;
    font-family: 'Metropolis Regular';
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .content {
    width: auto;
    height: auto;
  }

  .card-title {
    color: var(--darkBlueHibredu);
    font-size: 4em;
  }

  .sub-title {
    font-size: 1em;
    font-family: 'Metropolis Thin';
  }
}
</style>