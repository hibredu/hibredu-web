<template>
  <div class="principal-dashboard">
    <TopBar/>
    <LateralMenu/>
    <div class="content">
      <div class="top-bar">
        <SearchBar/>
        <DropDown/>
      </div>
      <ProgressStepBarVertical/>
    </div>
  </div>
</template>

<script>
import LateralMenu from '../../components/LateralMenu'
import DropDown from '../../components/DropDown'
import TopBar from '../../components/bars/TopBar'
import SearchBar from '../../components/bars/SearchBar'
import ProgressStepBarVertical from '../../components/bars/ProgressStepBarVertical'

export default {
name: 'Importation',

  components: {
    LateralMenu, DropDown, TopBar, SearchBar, ProgressStepBarVertical
    
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

.file-input {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

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
}
</style>