<template>
  <div class="principal-dashboard">
    <TopBar />
    <LateralMenu />
    <div class="content">
      <div class="top-bar">
        <SearchBar />
        <DropDown />
      </div>
      <div class="select-filter">
        <DefaultLoading v-if="this.showLoading.classroomFilter" />
        <SelectFilter v-if="!this.showLoading.classroomFilter" text="Turma" :items="this.classrooms"
         @update:value="selectedClassroom = $event;getInfosByClassroomId();" />
      </div>
      <div v-if="this.selectedClassroom != null">
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
        <div class="start">
          <DefaultTable />
        </div>
        <div class="middle">
          <AlertCard :params="this.alerts" />
          <div class="bar-chart">
            <BarChart title="Atividades no Tempo" />
          </div>
        </div>
        <div class="bottom">
          <div class="activities-table">
            <DefaultTable />
          </div>
          <ActivityCard :params="this.activitiesAlert" />
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
import SearchBar from "../../components/bars/SearchBar";
import SelectFilter from "../../components/filters/SelectFilter";
import InfoCard from "../../components/cards/InfoCard";
import AlertCard from "../../components/cards/alerts/AlertCard";
import ActivityCard from "../../components/cards/alerts/ActivityCard";
import BarChart from "../../components/graphs/BarChart";
import DefaultTable from "../../components/tables/DefaultTable";
import DefaultLoading from "../../components/loading/DefaultLoading";
import { mapActions } from "vuex";

export default {
  name: "Classroom",
  mixins: [globalMethods],
  components: {
    LateralMenu,
    DropDown,
    TopBar,
    SearchBar,
    SelectFilter,
    InfoCard,
    AlertCard,
    ActivityCard,
    BarChart,
    DefaultTable,
    DefaultLoading
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
       showLoading: {
        classroomFilter: true,
      },
      selectedClassroom: null,
    };
  },
  mounted() {
    this.getClassrooms();
    this.getActivities();
    this.getAttendance();
  },
  methods: {
    ...mapActions([
      "action_classroomById",
      "action_classroom",
      "action_overviewActivities",
      "action_overviewAttendance",
      "action_alertByClassroomId",
    ]),
    getInfosByClassroomId(){
      this.action_classroomById({
        classroomId: this.selectedClassroom.id,
      }).then((response) => {
        this.cardAlerts = response.metrics.alerts;
        this.cardDeliveredActivities = response.metrics.deliveredActivities;
        this.cardDeliveryPercentage =
          (response.metrics.deliveryPercentage * 100).toFixed(1) + "%";
        this.cardHitRate = (response.metrics.hitRate * 100).toFixed(1) + "%";
      });

      this.action_alertByClassroomId({
        classroomId: this.selectedClassroom.id
      }).then((response) => {
        this.alerts = response;
      });
    },
    getClassrooms() {
      this.action_classroom().then((response) => {
        this.classrooms = response;
        this.showLoading.classroomFilter = false;
      });
    },
    getActivities() {
      this.action_overviewActivities().then((response) => {
        this.activities = response;
      });
    },
    getAttendance() {
      this.action_overviewAttendance().then((response) => {
        this.attendance = response;
      });
    },
    formatData2BarChart(data) {
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

.select-filter {
  margin-top: 10px;
}

.start {
  margin-top: 1em;
  height: 25em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.middle {
  margin-top: 1em;
  height: 26em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.bottom {
  margin-top: 2em;
  height: 25em;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.activities-table {
  width: 65%;
  height: 25em;
  border: solid 1px blue;
}

.bar-chart {
  width: 65%;
  height: auto;
  align-items: center;
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

  .start {
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

  .bar-chart {
    width: 100%;
    height: auto;
    align-items: center;
  }

  .activities-table {
  width: 100%;
  height: auto;
  border: solid 1px blue;
}
}
</style>