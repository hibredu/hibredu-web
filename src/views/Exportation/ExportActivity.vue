<template>
  <div class="export-activity">
    <TopBar />
    <LateralMenu />
    <div class="content">
      <div class="top-bar">
        <SearchBar />
        <DropDown />
      </div>
      <h4>Exportar Atividade</h4>
      <div class="filters">
        <DefaultLoading v-if="this.classrooms.length === 0" />
        <SelectFilter
          v-if="this.classrooms.length > 0"
          text="Turma"
          label="3A-2021"
          :items="this.classrooms"
          @update:value="
            selectedClassroom = $event;
            getActivityByClassroomId();"
        />
      </div>
      <div class="center">
        <ScrollListExportActivity
          :classroom="this.selectedClassroom"
          :params="this.activity"
        />
        <download-csv
          delimiter=";"
          :data="activity"
          :name="'Atividade_' + this.selectedClassroom.name + '.csv'"
        >
          <IconNormalButton
            icon="mdi-cloud-download"
            text="Exportar"
            color="var(--yellowHibredu)"
            colorText="var(--whiteHibredu)"
          />
        </download-csv>
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
import ScrollListExportActivity from "../../components/lists/ScrollListExportActivity";
import IconNormalButton from "../../components/buttons/IconNormalButton";
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
    ScrollListExportActivity,
    IconNormalButton,
  },
  data() {
    return {
      selectedClassroom: {
        id: 1,
        name: "3A-2021",
      },
      activity: [],
    };
  },
  mounted() {
    if (this.classrooms.length === 0) {
      this.action_classroom();
    }
    this.getActivityByClassroomId();
  },
  methods: {
    ...mapActions([
      "action_classroom", 
      "action_activityByClassroomId",
    ]),
    getActivityByClassroomId() {
      this.activity = [];
      this.action_activityByClassroomId({
        classroomId: this.selectedClassroom.id,
      }).then((response) => {
        this.formatActivity(response);
      });
    },
    formatActivity(data) {
      for (let i = 0; i < data.length; i++) {
        this.activity.push({
          id: data[i].id,
          name: data[i].name,
          subject: data[i].subject,
          created_at: data[i].created_at,
          max_note: data[i].max_note,
          description: data[i].description
        });
      }
    },
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

h4 {
  font-family: "Metropolis Regular";
  color: var(--whiteHibredu);
  font-size: 1.3em;
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
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 2em;
  }

  .center{
    width: 95%;
    height: 100%;
  }
}

@media only screen and (min-width: 1024px) and (min-width: 1440px){
  .export-activity {
    width: 100%;
    height: 115%;
    background-color: var(--lightBlueHibredu);
    display: flex;
    flex-direction: row;
    position: absolute;
    z-index: 1;
  }

  .center {
    width: 95%;
    height: auto;
    margin-bottom: 2em;
  }
}
</style>