<template>
  <v-card class="info-card" flat>
    <div class="content">
      <DefaultLoading class="card-title" v-if="!this.number"/>
      <h4 v-else class="card-title" :style="color">
        {{ number }}
      </h4>
      <h6 class="sub-title">
        {{ text }}
      </h6>
    </div>  
  </v-card>
</template>

<script>
import DefaultLoading from "../../components/loading/DefaultLoading";

export default {
  name: 'InfoCard',
  props: [ "number", "text", "color" ],
  components: {
    DefaultLoading
  }
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
  width: auto;
  height: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

@media only screen and (max-width: 1440px){
  .info-card {
    width: 14em;
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