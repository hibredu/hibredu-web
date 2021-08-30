<template>
  <div class="principal-dashboard">
    <LateralMenu/>
    <TopBar/>
    <SearchBar/>
    <DropDown/>
  </div>
</template>

<script>
import LateralMenu from '../../components/LateralMenu.vue'
import DropDown from '../../components/DropDown.vue'
import TopBar from '../../components/Bars/TopBar.vue'
import SearchBar from '../../components/Bars/SearchBar.vue'


export default {
name: 'PrincipalDashboard',

  components: {
    LateralMenu, DropDown, TopBar, SearchBar
  },
}
</script>

<style>
.principal-dashboard{
  width: 100%;
  height: 100%;
  background-color: var(--lightBlueHibredu);
  display: flex;
  flex-direction: row;
  position: absolute;
  z-index: 1;
  align-items: top;
}

</style>