<template>
  <div class="export-activity">
    <TopBar />
    <LateralMenu />
    <div class="content">
      <div class="top-bar">
        <SearchBar />
        <DropDown />
      </div>
      <div class="button-card">
        <Construction/>
      </div>
    </div>
  </div>
</template>

<script>
import LateralMenu from "../../components/LateralMenu";
import DropDown from "../../components/DropDown";
import TopBar from "../../components/bars/TopBar";
import SearchBar from "../../components/bars/SearchBar";
import Construction from "../../components/Construction";

export default {
  name: "MyProfile",

  components: {
    LateralMenu,
    DropDown,
    TopBar,
    SearchBar,
    Construction,
  },
};
</script>

<style scoped>
.export-activity {
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
.export-activity {
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