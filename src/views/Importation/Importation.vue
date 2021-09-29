<template>
  <div class="importation">
    <TopBar />
    <LateralMenu />
    <div class="content">
      <div class="top-bar">
        <SearchBar />
        <DropDown />
      </div>
      <div class="button-card">
        <ButtonCard
          title="Envio de Atividades"
          :buttons="this.activityButtons"
        />
        <ButtonCard
          title="Envio de Presença"
          :buttons="this.attendanceButtons"
        />
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
  data() {
    return {
      activityButtons: [
        { title: "Microsoft Forms", ico: "mdi-microsoft" },
        { title: "Google Forms", ico: "mdi-google" },
        { title: "Outros", ico: "mdi-file" },
      ],
      attendanceButtons: [
        { title: "Microsoft Teams", ico: "mdi-microsoft-teams" },
        { title: "Google Forms", ico: "mdi-google" },
        { title: "Outros", ico: "mdi-file" },
      ],
    };
  },
};
</script>

<style scoped>
.importation {
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
  width: 98%;
  height: 100%;
  padding: 2em 2em 2em 8em;
}

.top-bar {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  justify-content: space-between;
  align-items: center;
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
  margin-top: 3em;
  height: auto;
}

@media only screen and (max-width: 1024px) {
  .importation {
    width: 100%;
    height: auto;
    background-color: var(--lightBlueHibredu);
    display: flex;
    flex-direction: row;
    position: absolute;
    z-index: 1;
  }

  .top-bar {
    width: auto;
    margin-top: 2em;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 100%;
    padding-left: 2em 2em 2em 3em;
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