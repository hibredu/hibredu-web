<template>
  <div class="export-activity">
    <TopBar />
    <LateralMenu />
    <div class="content">
      <div class="top-bar">
        <SearchBar />
        <DropDown />
      </div>
      <div class="filters">
        <SelectFilter text="Turma" :items="this.classrooms" />
        <DateFilter />
      </div>
      <div class="middle">
        <DefaultTable />
      </div>
    </div>
  </div>
</template>

<script>
import globalMethods from "../../mixins/globalMethods";
import LateralMenu from "../../components/LateralMenu";
import DropDown from "../../components/DropDown";
import TopBar from "../../components/bars/TopBar";
import SearchBar from "../../components/bars/SearchBar";
import SelectFilter from "../../components/filters/SelectFilter";
import DateFilter from "../../components/filters/DateFilter";
import DefaultTable from "../../components/tables/DefaultTable";
//import { mapActions } from "vuex";

export default {
  name: "ExportActivity",
  mixins: [globalMethods],
  components: {
    LateralMenu,
    DropDown,
    TopBar,
    SearchBar,
    SelectFilter,
    DateFilter,
    DefaultTable,
  },
  data() {
    return {};
  },
  async mounted() {},
  methods: {},
};
</script>

<style scoped>
.export-activity {
  width: 100%;
  height: auto;
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
  padding: 2em;
}

.top-bar {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  justify-content: space-between;
  align-items: center;
}

.cards {
  margin-top: 1em;
  height: 10em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.filters {
  margin-top: 10px;
   width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.middle {
  margin-top: 1em;
  height: 28em;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 10;
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
    width: 80%;
    justify-content: center;
    height: 100%;
    padding: 1em;
    align-items: center;
  }

  .middle {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 18em;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1440px) {
  .export-activity {
    width: 100%;
    height: auto;
    background-color: var(--lightBlueHibredu);
    display: flex;
    flex-direction: row;
    position: absolute;
    z-index: 1;
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 95%;
    height: 100%;
    padding: 2em;
  }

  .top-bar {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100px;
    justify-content: space-between;
    align-items: center;
  }

  .filters {
    margin-top: 10px;
  }

  .middle {
    margin-top: 1em;
    height: 28em;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 10;
  }
}
</style>