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
          number="210"
          color="color: var(--blueAlert)"
        />
        <InfoCard
          text="Porcentagem de Entrega"
          number="85%"
          color="color: var(--greenAlert)"
        />
        <InfoCard
          text="Taxa de Acerto"
          number="90%"
          color="color: var(--greenAlert)"
        />
        <InfoCard text="Alertas" number="42" color="color: var(--redAlert)" />
      </div>
      <div class="middle">
        <LineChart/>
        <SliceChart title="Realização de atividades por turma"/>
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
import WelcomeBar from "../../components/bars/WelcomeBar";
import InfoCard from "../../components/cards/InfoCard";
import AlertCard from "../../components/cards/alerts/AlertCard";
import PerformanceCard from "../../components/cards/alerts/PerformanceCard";
import ActivityCard from "../../components/cards/alerts/ActivityCard";
import SliceChart from "../../components/graphs/SliceChart";
import LineChart from "../../components/graphs/LineChart";
// import { mapActions } from "vuex";

export default {
  name: "PrincipalDashboard",

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
    SliceChart,
    LineChart,
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