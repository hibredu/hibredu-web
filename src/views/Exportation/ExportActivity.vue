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
        <DefaultLoading v-if="this.classrooms.length === 0" />
        <SelectFilter
          v-if="this.classrooms.length > 0"
          text="Turma"
          label="3A-2021"
          :items="this.classrooms"
          @update:value="
            selectedClassroom = $event;
            show();"
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
import DefaultLoading from "../../components/loading/DefaultLoading";
import SelectFilter from "../../components/filters/SelectFilter";
import { mapActions, mapState } from "vuex";

export default {
  name: "ExportActivity",

  components: {
    LateralMenu,
    DropDown,
    TopBar,
    SearchBar,
    DefaultLoading,
    SelectFilter,
  },
  data() {
    return {
      selectedClassroom: {
        id:1
      },
    }
  },
  mounted() {
    if (this.classrooms.length === 0) {
      this.action_classroom();
    }
  },
  methods: {
    ...mapActions([
      "action_classroom",
    ]),
    show() {
      console.log(this.selectedClassroom.id)
    }
  },
  computed: {
    ...mapState({
      classrooms: (state) => state.index.classrooms,
    }),
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

.filters {
  display: flex;
  flex-direction: row;
  width: 40%;
  justify-content: space-between;
  margin-top: 2em;
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

  .filters {
    display: flex;
    flex-direction: column;
    width: 40%;
    justify-content: space-between;
    margin-top: 2em;
  }
}
</style>