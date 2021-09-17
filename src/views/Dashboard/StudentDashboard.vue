<template>
  <div class="student-dashboard">
    <TopBar />
    <LateralMenu />
    <div class="content">
      <div class="top-bar">
        <div class="filters">
          <SelectFilter text="Turma" :items="this.classrooms" />
          <SelectFilter text="Aluno" :items="this.classrooms" />
        </div>
        <DropDown />
      </div>
      <div class="start">
        <div class="first-column">
          <div class="profile-card">
            <ProfileCard />
          </div>
          <div class="buttons">
            <IconNormalButton icon="mdi-cloud-download" color="var(--grayHibredu)"/>
            <IconNormalButton icon="mdi-email" color="var(--grayHibredu)"/>
          </div>
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
            <LineChart title="Desempenho X Presença" /><AlertCard
              :params="this.alerts"
            />
          </div>
        </div>
      </div>
      <div class="middle">
        <PieChart
          title="Realização de atividades por turma"
          :data="this.activitiesByClassroom"
        />
      </div>
      <div class="bottom">
        <PerformanceCard :params="this.classrooms" />
        <ActivityCard :params="this.activitiesAlert" />
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
import PerformanceCard from "../../components/cards/alerts/PerformanceCard";
import PieChart from "../../components/graphs/PieChart";
import LineChart from "../../components/graphs/LineChart";
import IconNormalButton from "../../components/buttons/IconNormalButton";
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
    PerformanceCard,
    PieChart,
    LineChart,
    ProfileCard,
    IconNormalButton,
  },
  data() {
    return {
      cardAlerts: "",
      cardDeliveredActivities: "",
      cardDeliveryPercentage: "",
      cardHitRate: "",
      selectedClassroom: "",
      classrooms: [],
      activitiesByClassroom: [],
      activities: [],
      attendance: [],
      alerts: [],
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
        this.cardDeliveryPercentage = (response.deliveryPercentage * 100 ).toFixed(1) + "%";
        this.cardHitRate = (response.hitRate * 100).toFixed(1) + "%";
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
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}

.bottom {
  margin-top: 2em;
  height: 25em;
  width: auto;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
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
    margin-top: 0em;
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    height: 100%;
    padding: 1em;
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
    height: 25em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: auto;
  }
}
</style>