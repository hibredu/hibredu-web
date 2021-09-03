<template>
  <div class="principal-dashboard">
    <TopBar/>
    <LateralMenu/>
    <div class="content">
      <div class="top-bar">
        <SearchBar/>

        <DropDown/>
      </div>
    </div>
  </div>
</template>

<script>
import LateralMenu from '../../components/LateralMenu'
import DropDown from '../../components/DropDown'
import TopBar from '../../components/bars/TopBar'
import SearchBar from '../../components/bars/SearchBar'


export default {
name: 'PrincipalDashboard',

  components: {
    LateralMenu, DropDown, TopBar, SearchBar
    
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
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: 2em 4em  ;
}

.top-bar {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 6%;
  justify-content: space-between;
}
</style>