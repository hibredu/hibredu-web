<template>
  <div class="student-dashboard">
    <TopBar />
    <LateralMenu />
    <div class="content">
      <div class="top-bar">
        <div class="filters">
          <DefaultLoading v-if="this.classrooms.length === 0" />
          <SelectFilter
            v-if="this.classrooms.length > 0" 
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
      <div v-if="selectedStudent != null">
        <div class="start">
          <div class="first-column">
            <div class="profile-card">
              <ProfileCard :params="this.profileInfos" />
            </div>
            <IconNormalButtonDisabled
              icon="mdi-cloud-download"
              text="Exportar"
              color="var(--whiteHibredu)"
              colorText="var(--grayHibredu)"
            />
            <IconNormalButton
              :email="this.profileInfos.email"
              icon="mdi-email"
              text="Enviar E-mail"
              color="var(--whiteHibredu)"
              colorText="var(--grayHibredu)"
            />
          </div>
          <div class="second-column">
            <div class="cards">
              <InfoCard
                text="Atividades Cadastradas"
                :number="this.cards.deliveredActivities"
                color="color: var(--blueAlert)"
              />
              <InfoCard
                text="Porcentagem de Entrega"
                :number="this.cards.deliveryPercentage"
                color="color: var(--greenAlert)"
              />
              <InfoCard
                text="Taxa de Acerto"
                :number="this.cards.hitRate"
                color="color: var(--greenAlert)"
              />
              <InfoCard
                text="Alertas"
                :number="this.cards.alerts"
                color="color: var(--redAlert)"
              />
            </div>
            <div class="charts">
              <div class="line-chart">
                <LineChart
                  title="Desempenho X Presença"
                  :data="this.activitiesVsAttendance"
                  legend_1="Atividades Entregues"
                  legend_2="Presença"
                  :values="this.values"
                />
              </div>
              <AlertCard :params="this.alerts" />
            </div>
          </div>
        </div>
        <div class="bottom">
          <ScrollList :params="this.activities" :header="this.activitiesHeader"/>
        </div>
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
import LineChart from "../../components/graphs/LineChart";
import IconNormalButton from "../../components/buttons/IconNormalButton";
import IconNormalButtonDisabled from "../../components/buttons/IconNormalButtonDisabled";
import DefaultLoading from "../../components/loading/DefaultLoading";
import ScrollList from "../../components/lists/ScrollList";
import { mapActions, mapState } from "vuex";

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
    ProfileCard,
    IconNormalButton,
    IconNormalButtonDisabled,
    DefaultLoading,
    LineChart,
    ScrollList,
  },
  data() {
    return {
      cards: {
        deliveredActivities: '',
        deliveryPercentage: '',
        hitRate: '',
        alerts: '',
      },
      selectedClassroom: null,
      selectedStudent: null,
      students: [],
      profileInfos: {
        name: "",
        classroom: "",
        email: "",
        subjects: []
      },
      alerts: [],
      showLoading: {
        studentsFilter: true,
      },
      activitiesVsAttendance: [],
      values: ["present", "delivered"],
      activities: [],
      activitiesHeader: [
        {title:'#'},
        {title:'Nome'},
        {title:'Data'},
        {title:'Status'},
        {title:'Nota'},
      ]
    };
  },
  mounted() {
    if(this.classrooms.length === 0) {
      this.action_classroom();
    }
  },
  methods: {
    ...mapActions([
      "action_classroom",
      "action_classroomById",
      "action_studentById",
      "action_alertByStudentId",
      "action_overviewAttendanceActivitiesByStudentId"
    ]),
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
        this.cards.alerts = response.metrics.alerts;
        this.cards.deliveredActivities = response.metrics.deliveredActivities;
        this.cards.deliveryPercentage =
          (response.metrics.deliveryPercentage * 100).toFixed(1) + "%";
        this.cards.hitRate = (response.metrics.hitRate * 100).toFixed(1) + "%";
        this.profileInfos.name = response.name;
        this.profileInfos.classroom = this.selectedClassroom.name;
        this.profileInfos.email = this.selectedStudent.email;
        this.formatSubjects2Card(response.school_subjects);
        console.log(response.school_subjects)
        this.formatActivities(response.activities);
      });
      this.action_alertByStudentId({
        studentId: this.selectedStudent.id,
      }).then((response) => {
        this.alerts = response;
      });
      this.action_overviewAttendanceActivitiesByStudentId({
        studentId: this.selectedStudent.id,
      }).then((response) => {
        this.activitiesVsAttendance = response;
      });
    },
    formatSubjects2Card(data) {
      for (let i = 0; i < data.length; i++) {
        this.profileInfos.subjects.push(data[i].name);
      }
      this.profileInfos.subjects = [...new Set(this.profileInfos.subjects)];
      this.profileInfos.subjects = this.profileInfos.subjects.toString()
    },
    formatActivities(data) {
      for(let i = 0; i < data.length; i++) {
        this.activities.push({
          id: data[i].activity.id,
          name: data[i].activity.name,
          date: this.formatDate(data[i].activity.created_at),
          status: data[i].status,
          grade: data[i].grade,
          max_note: data[i].activity.max_note
        });
      }
    }
  },
  computed: {
    ...mapState({
      classrooms: state => state.index.classrooms
    })
  }
};
</script>

<style scoped>
.student-dashboard {
  width: 100%;
  height: 120%;
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
  height: 30em;
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

.bottom {
  margin-top: 2em;
  height: 25em;
  width: 84%;
  margin-left: 16%;
  display: flex;
  flex-direction: row-reverse;
}

.line-chart {
  width: 65%;
  height: auto;
  align-items: center;
}

@media only screen and (max-width: 1024px) {
  .student-dashboard {
    width: 100%;
    height: 400%;
    background-color: var(--lightBlueHibredu);
    display: flex;
    flex-direction: column;
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
    height: auto;
    padding-left: 2em 2em 2em 3em;
  }

  .second-column {
    height: 100%;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0em;
  }

  .cards {
    align-items: center;
    margin-top: 2em;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: auto;
  }

  .charts {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 15em;
  }

  .first-column {
    width: auto;
    height: 40em;
    margin-bottom: 2em;
  }

  .profile-card {
    width: 15em;
    height: 30em;
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
  
  .bottom {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 15em;
    margin: 0;
  }

  .line-chart {
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
    height: 170%;
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
    padding-left: 8em;
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
    height: 27em;
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

  .bottom {
    margin-top: 2em;
    height: 25em;
    width: 77%;
    margin-left: 23%;
    display: flex;
    flex-direction: row-reverse;
  }

  .line-chart {
    width: 65%;
    height: auto;
    align-items: center;
  }
}
</style>