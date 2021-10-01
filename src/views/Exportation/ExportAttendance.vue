<template>
  <div class="export-attendance">
    <TopBar />
    <LateralMenu />
    <div class="content">
      <div class="top-bar">
        <SearchBar />
        <DropDown />
      </div>
      <h4>Exportar Presença</h4>
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
      <div class="center">
        <ScrollListAttendance
          :classroom="this.selectedClassroom"
          :params="this.attendance"
        />
        <download-csv
          :data="attendance"
          :name="this.selectedClassroom.name + '.csv'"
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
import ScrollListAttendance from "../../components/lists/ScrollListAttendance";
import IconNormalButton from "../../components/buttons/IconNormalButton";
import { mapActions, mapState } from "vuex";

export default {
  name: "ExportAttendance",

  components: {
    LateralMenu,
    DropDown,
    TopBar,
    SearchBar,
    DefaultLoading,
    SelectFilter,
    ScrollListAttendance,
    IconNormalButton,
  },
  data() {
    return {
      selectedClassroom: {
        id: 1,
        name: "3A-2021",
      },
      attendance: [],
    };
  },
  mounted() {
    if (this.classrooms.length === 0) {
      this.action_classroom();
    }
    this.getAttendanceById();
  },
  methods: {
    ...mapActions(["action_classroom", "action_attendanceById"]),
    getAttendanceById() {
      this.action_attendanceById({
        attendanceId: 1,
      }).then((response) => {
        this.formatAttendance(response.attendanceStudents);
      });
    },
    formatAttendance(data) {
      for (let i = 0; i < data.length; i++) {
        this.attendance.push({
          id: data[i].student.id,
          name: data[i].student.name,
          email: data[i].student.email,
          created_at: data[i].student.created_at,
          present: data[i].present,
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
.export-attendance {
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
  .export-attendance {
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
</style>