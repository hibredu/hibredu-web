<template>
  <div class="principal-dashboard">
    <TopBar />
    <LateralMenu />
    <div class="content">
      <div class="top-bar">
        <SearchBar />
        <DropDown />
      </div>
      <div class="cards">
        <InfoCard
          :text="`Atividades Cadastradas`"
          :number="`210`"
          :color="`color: var(--blueAlert)`"
        />
        <InfoCard
          :text="`Porcentagem de Entrega`"
          :number="`85%`"
          :color="`color: var(--greenAlert)`"
        />
        <InfoCard
          :text="`Taxa de Acerto`"
          :number="`90%`"
          :color="`color: var(--greenAlert)`"
        />
        <InfoCard
          :text="`Alertas`"
          :number="`42`"
          :color="`color: var(--redAlert)`"
          @click.native="search"
        />
      </div>
      <div class="bottom">
        <AlertCard />
        <PerformanceCard />
        <ActivityCard />
      </div>
    </div>
  </div>
</template>

<script>
import LateralMenu from "../../components/LateralMenu";
import DropDown from "../../components/DropDown";
import TopBar from "../../components/bars/TopBar";
import SearchBar from "../../components/bars/SearchBar";
import InfoCard from "../../components/cards/InfoCard";
import AlertCard from "../../components/cards/alerts/AlertCard";
import PerformanceCard from "../../components/cards/alerts/PerformanceCard";
import ActivityCard from "../../components/cards/alerts/ActivityCard";
import { mapActions } from "vuex";

export default {
  name: "PrincipalDashboard",

  components: {
    LateralMenu,
    DropDown,
    TopBar,
    SearchBar,
    InfoCard,
    AlertCard,
    PerformanceCard,
    ActivityCard,
  },
  mounted() {
    this.search();
  },
  methods: {
    ...mapActions(["action_overviewClassroom"]),
    search() {
      this.action_overviewClassroom().then((response) => {
        console.log(response);
      });
    },
  },
};
</script>

<style scoped>
.principal-dashboard {
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
  width: 100%;
  height: 100%;
  padding: 2em 4em;
}

.top-bar {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 20%;
  justify-content: space-between;
}

.cards {
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.bottom {
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40%;
}

@media only screen and (max-width: 1024px) {
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0em 0.5em 0em 0.5em;
  }

  .top-bar {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    padding: 20px;
    align-items: center;
    width: 100%;
    height: auto;
  }
  .cards {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
   .bottom {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
}
</style>