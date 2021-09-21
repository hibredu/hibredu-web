<template>
  <div class="student-dashboard">
    <TopBar />
    <LateralMenu />
    <div class="content">
      <div class="top-bar">
        <div class="filters">
          <DefaultLoading v-if="this.showLoading.classroomFilter" />
          <SelectFilter
            v-if="!this.showLoading.classroomFilter"
            text="Turma"
            :items="this.classrooms"
            @update:value="
              selectedClassroom = $event;
              getStudents();"
          />
          <DefaultLoading
            v-if="this.showLoading.studentsFilter && this.selectedClassroom != null"
          />
          <SelectFilter
            v-if="!this.showLoading.studentsFilter && this.selectedClassroom != null"
            text="Aluno"
            :items="this.students"
            @update:value="
              selectedStudent = $event;
              getStudentById();"
          />
        </div>
        <DropDown />
      </div>
      <div>
        <div class="start">
          <div class="first-column">
            <div class="profile-card">
              <ProfileCard :params="this.profileInfos" />
            </div>
            <IconNormalButton
              icon="mdi-cloud-download"
              text="Exportar"
              color="var(--grayHibredu)"
            />
            <IconNormalButton
              icon="mdi-email"
              text="Enviar E-mail"
              color="var(--grayHibredu)"
            />
          </div>
          <div class="second-column">
            <div class="cards">
              <InfoCard
                text="Atividades Cadastradas"
                :number="this.cardDeliveredActivities"
                color="color: var(--blueAlert)"
              />
              <InfoCard
                text="Porcentagem de Entrega"
                :number="this.cardDeliveryPercentage"
                color="color: var(--greenAlert)"
              />
              <InfoCard
                text="Taxa de Acerto"
                :number="this.cardHitRate"
                color="color: var(--greenAlert)"
              />
              <InfoCard
                text="Alertas"
                :number="this.cardAlerts"
                color="color: var(--redAlert)"
              />
            </div>
            <div class="charts">
              <div class="bar-chart">
                <BarChart title="Atividades no Tempo" />
              </div>
              <AlertCard :params="this.alerts" />
            </div>
          </div>
        </div>
        <div class="middle">
          <BarChart title="Presença no Tempo" />
        </div>
        <!-- <div class="bottom" style="border: solid 1px purple">
          <DefaultTable />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import globalMethods from "../../mixins/globalMethods";
import LateralMenu from "../../components/LateralMenu";
import DropDown from "../../components/DropDown";
import TopBar from "../../components/bars/TopBar";
import SelectFilter from "../../components/filters/SelectFilter";
import InfoCard from "../../components/cards/InfoCard";
import ProfileCard from "../../components/cards/ProfileCard";
import AlertCard from "../../components/cards/alerts/AlertCard";
import BarChart from "../../components/graphs/BarChart";
import IconNormalButton from "../../components/buttons/IconNormalButton";
import DefaultLoading from "../../components/loading/DefaultLoading";
// import DefaultTable from "../../components/tables/DefaultTable";
import { mapActions } from "vuex";

export default {
  name: "StudentDashboard",
  mixins: [globalMethods],
  components: {
    LateralMenu,
    DropDown,
    TopBar,
    SelectFilter,
    InfoCard,
    AlertCard,
    BarChart,
    ProfileCard,
    IconNormalButton,
    DefaultLoading,
    // DefaultTable,
  },
  data() {
    return {
      cardAlerts: "",
      cardDeliveredActivities: "",
      cardDeliveryPercentage: "",
      cardHitRate: "",
      selectedClassroom: null,
      selectedStudent: null,
      classrooms: [],
      students: [],
      profileInfos: {
        name: "",
        classroom: "",
        email: "",
      },
      alerts: [],
      showLoading: {
        classroomFilter: true,
        studentsFilter: false,
      },
      studentEmail: "",
    };
  },
  mounted() {
    this.getClassrooms();
  },
  methods: {
    ...mapActions([
      "action_classroom",
      "action_classroomById",
      "action_studentById",
      "action_alertByStudentId",
    ]),
    getClassrooms() {
      this.action_classroom().then((response) => {
        this.classrooms = response;
        this.showLoading.classroomFilter = false;
        this.showLoading.studentsFilter = true;
      });
    },
    getStudents() {
      this.action_classroomById({
        classroomId: this.selectedClassroom.id,
      }).then((response) => {
        this.students = response.students.sort(function (a, b) {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });
        this.showLoading.studentsFilter = false;
      });
    },
    getStudentById() {
      this.action_studentById({
        studentId: this.selectedStudent.id,
      }).then((response) => {
        this.cardAlerts = response.metrics.alerts;
        this.cardDeliveredActivities = response.metrics.deliveredActivities;
        this.cardDeliveryPercentage =
          response.metrics.deliveryPercentage.toFixed(1) + "%";
        this.cardHitRate = (response.metrics.hitRate * 100).toFixed(1) + "%";
        this.profileInfos.name = response.name;
        this.profileInfos.classroom = this.selectedClassroom.name;
        this.profileInfos.email = this.selectedStudent.email;
      });
      this.action_alertByStudentId({
        studentId: this.selectedStudent.id,
      }).then((response) => {
        this.alerts = response;
      });
    },
  },
};
</script>

<style scoped>
.student-dashboard {
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
  height: 8em;
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

.cards {
  height: 10em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.buttons {
  display: flex;
  margin-top: 1em;
  flex-direction: row;
  justify-content: space-between;
}

.charts {
  margin-top: 1em;
  height: 25em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.start {
  margin-top: 1em;
  height: 35em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.second-column {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 2em;
}
.first-column {
  width: 15em;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.profile-card {
  width: 15em;
  height: 30em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.middle {
  margin-top: 2em;
  height: 25em;
  width: 83%;
  margin-left: 17%;
  display: flex;
  flex-direction: row-reverse;
}

.bottom {
  margin-top: 2em;
  height: 25em;
  width: 83%;
  margin-left: 17%;
  display: flex;
  flex-direction: row-reverse;
}

.bar-chart {
  width: 65%;
  height: auto;
  align-items: center;
}

@media only screen and (max-width: 1024px) {
  .student-dashboard {
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
    height: 1000%;
    padding: 1em;
    align-items: center;
  }

  .second-column {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0em;
  }

  .cards {
    margin-top: 2em;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }

  .charts {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }

  .first-column {
    width: 15em;
    height: 30em;
    margin-bottom: 2em;
  }

  .profile-card {
    width: 15em;
    height: 25em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .start {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: auto;
  }

  .middle {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: auto;
  }

  .bottom {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: auto;
  }

  .bar-chart {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: auto;
  }

  .filters {
    display: flex;
    flex-direction: column;
    width: 40%;
    justify-content: space-between;
    margin-top: 2em;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1440px) {
  .student-dashboard {
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
    height: 8em;
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

  .cards {
    height: 10em;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .buttons {
    display: flex;
    margin-top: 1em;
    flex-direction: row;
    justify-content: space-between;
  }

  .charts {
    margin-top: 1em;
    height: 25em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .start {
    margin-top: 1em;
    height: 35em;
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .second-column {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 2em;
  }

  .first-column {
    width: 15em;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .profile-card {
    width: 15em;
    height: 30em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .middle {
    margin-top: 2em;
    height: 25em;
    width: 77%;
    margin-left: 23%;
    display: flex;
    flex-direction: row-reverse;
  }

  .bottom {
    margin-top: 2em;
    height: 25em;
    width: 77%;
    margin-left: 23%;
    display: flex;
    flex-direction: row-reverse;
  }

  .bar-chart {
    width: 65%;
    height: auto;
    align-items: center;
  }
}
</style>