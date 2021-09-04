<template>
  <div class="principal-dashboard">
    <TopBar/>
    <LateralMenu/>
    <div class="content">
      <div class="top-bar">
        <SearchBar/>
        <DropDown/>
      </div>
      <div class="cards">
        <InfoCard :text='`Atividades Cadastradas`' :number='`210`'/>
        <InfoCard :text='`Porcentagem de Entrega`' :number='`85%`'/>
        <InfoCard :text='`Taxa de Acerto`' :number='`90%`'/>
        <InfoCard :text='`Alertas`' :number='`42`'/>
      </div>
    </div>
  </div>
</template>

<script>
import LateralMenu from '../../components/LateralMenu'
import DropDown from '../../components/DropDown'
import TopBar from '../../components/bars/TopBar'
import SearchBar from '../../components/bars/SearchBar'
import InfoCard from '../../components/cards/InfoCard'

export default {
name: 'PrincipalDashboard',

  components: {
    LateralMenu, DropDown, TopBar, SearchBar, InfoCard
    
  },
}
</script>

<style scoped>
.principal-dashboard{
  width: 100%;
  height: 100%;
  background-color: var(--lightBlueHibredu);
  display: flex;
  flex-direction: row;
  position: absolute;
  z-index: 1;
}

.content {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2em 4em;
}

.top-bar {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 20%;
  justify-content: space-between;
}

.cards {
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media only screen and (max-width: 1024px){
  .top-bar {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    padding: 20px;
    align-items: center;
    width: 100%;
    height: auto;
  }
  .cards {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
}
</style>