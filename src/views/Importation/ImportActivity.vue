<template>
  <div class="import-attendance">
    <TopBar />
    <LateralMenu />
    <div class="content">
      <div class="top-bar">
        <SearchBar/>
        <DropDown/>
      </div>
      <h4>Envio de Atividade</h4>
      <div class="file-input">
        <StepActivity/>
      </div>
    </div>
  </div>
</template>

<script>
import LateralMenu from "../../components/LateralMenu";
import DropDown from "../../components/DropDown";
import TopBar from "../../components/bars/TopBar";
import SearchBar from "../../components/bars/SearchBar";
import StepActivity from "../../components/bars/StepActivity";

export default {
  name: "ImportActivity",

  components: {
    LateralMenu,
    DropDown,
    TopBar,
    SearchBar,
    StepActivity,
  },
};
</script>

<style scoped>
.import-attendance {
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
  padding: 2em 2em 2em 8em;
}

.top-bar {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10%;
  justify-content: space-between;
}

.file-input {
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

h4 {
  font-family: "Metropolis Regular";
  color: var(--whiteHibredu);
  font-size: 1.3em;
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
  
  .file-input {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>