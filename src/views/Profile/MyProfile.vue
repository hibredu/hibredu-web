<template>
  <div class="my-profile">
    <TopBar />
    <LateralMenu />
    <div class="content">
      <div class="top-bar">
        <SearchBar />
        <DropDown />
      </div>
      <div class="center">
        <div class="first-column">
          <div>
            <EditProfile />
          </div>
          <div>
            <HibreduPencilsCard />
          </div>
        </div>
        <div class="second-column">
          <div class="profile-card">
            <v-card class="profile-card-loading" flat solo v-if="this.profileInfos.subjects.length  === 0">
              <DefaultLoading/>
            </v-card>
            <ProfileCard v-else :params="this.profileInfos" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LateralMenu from "../../components/LateralMenu";
import DropDown from "../../components/DropDown";
import TopBar from "../../components/bars/TopBar";
import SearchBar from "../../components/bars/SearchBar";
import ProfileCard from "../../components/cards/ProfileCard";
import EditProfile from "../../components/cards/EditProfile";
import HibreduPencilsCard from "../../components/cards/HibreduPencilsCard";
import DefaultLoading from "../../components/loading/DefaultLoading";
import { mapActions } from "vuex";

export default {
  name: "MyProfile",

  components: {
    LateralMenu,
    DropDown,
    TopBar,
    SearchBar,
    ProfileCard,
    EditProfile,
    HibreduPencilsCard,
    DefaultLoading
  },
  data() {
    return {
      profileInfos: {
        name: "",
        subjects: [],
        email: "",
        classroom: "",
      },
    };
  },
  mounted() {
    this.getTeacherById();
  },
  methods: {
    ...mapActions(["action_teacherById"]),
    getTeacherById() {
      this.action_teacherById({
        teacherId: localStorage.getItem("teacher_id"),
      }).then((response) => {
        this.profileInfos.name = response.name;
        this.formatSubjects2Card(response.subjects_classrooms);
      });
    },
    formatSubjects2Card(data) {
      for (let i = 0; i < data.length; i++) {
        this.profileInfos.subjects.push(data[i].school_subject.name);
        this.profileInfos.classroom += data[i].classroom.name + ", "
      }
      this.profileInfos.classroom = this.profileInfos.classroom.substring(0, this.profileInfos.classroom.length - 2);
      this.profileInfos.subjects = [...new Set(this.profileInfos.subjects)];
      this.profileInfos.subjects = this.profileInfos.subjects.toString()
    },
  },
};
</script>

<style scoped>
.my-profile {
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

.center {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  margin-top: 3em;
  height: 40em;
}

.profile-card {
  width: 20em;
  height: 30em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.profile-card-loading {
  width: 20em;
  height: 30em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.first-column {
  width: 40em;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.second-column {
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

@media only screen and (max-width: 1024px) {
  .my-profile {
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

  .center {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: auto;
  }

  .first-column {
    width: 100%;
    height: 50em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .second-column {
    width: auto;
    height: 40em;
    margin-bottom: 2em;
  }

  .profile-card {
    width: auto;
    height: 30em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .profile-card-loading {
    width: auto;
    height: 30em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
}
</style>