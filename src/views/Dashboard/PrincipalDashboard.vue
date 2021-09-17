<template>
  <div class="principal-dashboard">
    <TopBar />
    <LateralMenu />
    <div class="content">
      <div class="top-bar">
        <SearchBar />
        <DropDown />
      </div>
      <div class="welcome-bar">
        <WelcomeBar name="Vera" />
      </div>

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
      <div class="middle">
        <LineChart title="Desempenho X Presença" />
        <PieChart
          title="Realização de atividades por turma"
          :data="this.activitiesByClassroom"
        />
      </div>
      <div class="bottom">
        <AlertCard :params="this.alerts"/>
        <PerformanceCard :params="this.classrooms" />
        <ActivityCard :params="this.activitiesAlert"/>
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
import WelcomeBar from "../../components/bars/WelcomeBar";
import InfoCard from "../../components/cards/InfoCard";
import AlertCard from "../../components/cards/alerts/AlertCard";
import PerformanceCard from "../../components/cards/alerts/PerformanceCard";
import ActivityCard from "../../components/cards/alerts/ActivityCard";
import PieChart from "../../components/graphs/PieChart";
import LineChart from "../../components/graphs/LineChart";
import { mapActions } from "vuex";

export default {
  name: "PrincipalDashboard",
  mixins: [globalMethods],
  components: {
    LateralMenu,
    DropDown,
    TopBar,
    SearchBar,
    WelcomeBar,
    InfoCard,
    AlertCard,
    PerformanceCard,
    ActivityCard,
    PieChart,
    LineChart,
  },
  data() {
    return {
      cardAlerts: "",
      cardDeliveredActivities: "",
      cardDeliveryPercentage: "",
      cardHitRate: "",
      classrooms: [],
      activitiesByClassroom: [],
      activities: [],
      attendance: [],
      alerts: [],
      activitiesAlert: [
        { id: "1", activity: "Atividade 1", delivered: "10", total: "100" },
        { id: "2", activity: "Atividade 2", delivered: "20", total: "120" },
        { id: "3", activity: "Atividade 3", delivered: "35", total: "120" },
        { id: "4", activity: "Atividade 4", delivered: "15", total: "120" },
        { id: "5", activity: "Atividade 5", delivered: "40", total: "120" },
        { id: "6", activity: "Atividade 6", delivered: "90", total: "120" },
        { id: "7", activity: "Atividade 7", delivered: "30", total: "120" },
        { id: "8", activity: "Atividade 8", delivered: "50", total: "120" },
        { id: "9", activity: "Atividade 9", delivered: "60", total: "120" },
        { id: "10", activity: "Atividade 10", delivered: "10", total: "120" },
        { id: "11", activity: "Atividade 11", delivered: "10", total: "120" },
        { id: "12", activity: "Atividade 12", delivered: "10", total: "120" },
      ],
    };
  },
  mounted() {
    this.getCards();
    this.getClassrooms();
    this.getActivities();
    this.getAttendance();
    this.getAlerts();
  },
  methods: {
    ...mapActions([
      "action_overviewClassroom",
      "action_classroom",
      "action_overviewActivities",
      "action_overviewAttendance",
      "action_alertByClassroomId",
    ]),
    getCards() {
      this.action_overviewClassroom().then((response) => {
        this.cardAlerts = response.alerts;
        this.cardDeliveredActivities = response.deliveredActivities;
        this.cardDeliveryPercentage = response.deliveryPercentage.toFixed(1) + "%";
        this.cardHitRate = response.hitRate.toFixed(1) + "%";
      });
    },
    getClassrooms() {
      this.action_classroom().then((response) => {
        this.classrooms = response;
        this.formatData2PieChart(this.classrooms);
      });
    },
    getActivities() {
      this.action_overviewActivities().then((response) => {
        this.activities = response;
        console.log(response);
      });
    },
    getAttendance() {
      this.action_overviewAttendance().then((response) => {
        this.attendance = response;
      });
    },
    getAlerts() {
      this.action_alertByClassroomId().then((response) => {
        this.alerts = response;
      });
    },
    formatData2PieChart(data) {
      for (let i = 0; i < data.length; i++) {
        this.activitiesByClassroom.push({
          name: data[i].name.substr(0, 2),
          deliveredActivities: data[i].metrics.deliveredActivities,
        });
      }
    },
  },
};
</script>

<style scoped>
.principal-dashboard {
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

.welcome-bar {
  margin-top: 10px;
}

.middle {
  margin-top: 1em;
  height: 25em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.bottom {
  margin-top: 1em;
  height: 25em;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media only screen and (max-width: 1024px) {
  .principal-dashboard {
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
  }

  .cards {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
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
}
</style>