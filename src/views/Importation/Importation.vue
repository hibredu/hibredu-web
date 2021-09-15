<template>
  <div class="principal-dashboard">
    <TopBar />
    <LateralMenu />
    <div class="content">
      <div class="top-bar">
        <SearchBar/>
        <DropDown/>
      </div>
      <div class="button-card">
        <ButtonCard title="Envio de Atividades"/>
        <ButtonCard title="Envio de Presença"/>
      </div>
    </div>
  </div>
</template>

<script>
import LateralMenu from "../../components/LateralMenu";
import DropDown from "../../components/DropDown";
import TopBar from "../../components/bars/TopBar";
import SearchBar from "../../components/bars/SearchBar";
import ButtonCard from "../../components/cards/ButtonCard";

export default {
  name: "Importation",

  components: {
    LateralMenu,
    DropDown,
    TopBar,
    SearchBar,
    ButtonCard,
  },
};
</script>

<style scoped>
.principal-dashboard {
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

.file-input {
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.button-card {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  height: auto;
}

@media only screen and (max-width: 1024px) {
    .top-bar {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    padding: 20px;
    align-items: center;
    width: 100%;
    height: auto;
  }

  .button-card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: auto;
  }
}
</style>