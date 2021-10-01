<template>
  <div class="classroom-dashboard">
    <TopBar />
    <LateralMenu />
    <div class="content">
      <div class="loading" v-if="loading">
        <DefaultLoading />
      </div>
      <div class="top-bar">
        <SearchBar />
        <DropDown />
      </div>
      <div class="select-filter">
        <DefaultLoading v-if="this.classrooms.length === 0" />
        <SelectFilter
          v-if="this.classrooms.length > 0"
          text="Turma"
          :items="this.classrooms"
          @update:value="
            selectedClassroom = $event;
            getClassroomById();
          "
        />
      </div>
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
      <div class="start">
        <ScrollListStudent :params="this.students" />
      </div>
      <div class="middle">
        <div class="alert-card">
          <AlertCard :params="this.alerts" />
        </div>
        <div class="line-chart">
          <LineChart
            title="Desempenho X Presença"
            :data="this.activitiesVsAttendance"
            legend_1="Atividades Entregues"
            legend_2="Presença"
            :values="this.values"
          />
        </div>
      </div>
      <div class="bottom">
        <div class="activity-list">
          <ScrollListActivity :params="this.activities" />
        </div>
        <ActivitySubjectCard :params="this.activities"/>
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
import InfoCard from "../../components/cards/InfoCard";
import SelectFilter from "../../components/filters/SelectFilter";
import DefaultLoading from "../../components/loading/DefaultLoading";
import ScrollListStudent from "../../components/lists/ScrollListStudent";
import ScrollListActivity from "../../components/lists/ScrollListActivity";
import AlertCard from "../../components/cards/alerts/AlertCard";
import LineChart from "../../components/graphs/LineChart";
import ActivitySubjectCard from "../../components/cards/alerts/ActivitySubjectCard";
import { mapActions, mapState } from "vuex";

export default {
  name: "ClassroomDashboard",
  mixins: [globalMethods],
  components: {
    LateralMenu,
    DropDown,
    TopBar,
    SearchBar,
    InfoCard,
    SelectFilter,
    ScrollListStudent,
    AlertCard,
    DefaultLoading,
    LineChart,
    ScrollListActivity,
    ActivitySubjectCard,
  },
  data() {
    return {
      cards: {
        deliveredActivities: "",
        deliveryPercentage: "",
        hitRate: "",
        alerts: "",
      },
      students: [],
      activitiesVsAttendance: [],
      alerts: "",
      activities: [],
      showLoading: false,
      selectedClassroom: { id: 1 },
      values: ["present", "delivered"],
      loading: false,
    };
  },
  mounted() {
    this.getClassroomById();
    if (this.classrooms.length === 0) {
      this.action_classroom();
    }
  },
  methods: {
    ...mapActions([
      "action_classroomById",
      "action_classroom",
      "action_alertByClassroomId",
      "action_overviewAttendanceActivities",
      "action_activityByClassroomId",
    ]),
    getClassroomById() {
      this.loading = true;
      this.action_classroomById({
        classroomId: this.selectedClassroom.id,
      }).then((response) => {
        this.cards.alerts = response.metrics.alerts;
        this.cards.deliveredActivities = response.metrics.deliveredActivities;
        this.cards.deliveryPercentage =
          (response.metrics.deliveryPercentage * 100).toFixed(1) + "%";
        this.cards.hitRate = (response.metrics.hitRate * 100).toFixed(1) + "%";
        this.students = response.students;
      });
      this.loading = false;

      this.action_alertByClassroomId({
        classroomId: this.selectedClassroom.id,
      }).then((response) => {
        this.alerts = response;
      });

      this.action_overviewAttendanceActivities().then((response) => {
        this.activitiesVsAttendance = response;
      });

      this.action_activityByClassroomId({
        classroomId: this.selectedClassroom.id,
      }).then((response) => {
        this.activities = response;
      });
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
.classroom-dashboard {
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

.cards {
  margin-top: 1em;
  height: 10em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.start {
  margin-top: 1em;
  height: 25em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.select-filter {
  margin-top: 10px;
}

.middle {
  margin: 2em 0em 2em 0em;
  height: 27em;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 10;
}

.bottom {
  margin-top: 1em;
  height: 23em;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.alert-card {
  width: auto;
  height: 27em;
  align-items: center;
}

.line-chart {
  width: 60%;
  height: 27em;
  align-items: center;
}

.line-chart-loading {
  width: 40%;
  height: 27em;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.performance-loading {
  width: 30%;
  height: auto;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.loading {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 999;
}

.activity-list {
  width: 60%;
  height: auto;
}

@media only screen and (max-width: 1024px) {
  .content {
    display: flex;
    flex-direction: column;
    width: 95%;
    height: 100%;
    padding-left: 2em 2em 2em 3em;
  }

  .cards {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    height: 45em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: auto;
  }

  .alert-card {
    height: 10em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: auto;
  }

  .line-chart {
    width: auto;
    height: auto;
    align-items: center;
  }

  .line-chart-loading {
    width: auto;
    height: auto;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .performance-loading {
    width: auto;
    height: auto;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .activity-list {
    width: 100%;
    height: auto;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1440px) {
  .classroom-dashboard {
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
    padding-left: 8em;
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
    width: auto;
    flex-direction: row;
    justify-content: space-between;
  }

  .select-filter {
    margin-top: 10px;
  }

  .middle {
    margin: 2em 0em 2em 0em;
    height: 25em;
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 10;
  }

  .bottom {
    margin: 2em 0em 2em 0em;
    height: 23em;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .alert-card {
    width: 60%;
    height: 27em;
    align-items: center;
  }

  .line-chart {
    width: 70%;
    height: 27em;
    align-items: center;
  }

  .activity-list {
    width: 60%;
    height: 27em;
  }
}
</style>