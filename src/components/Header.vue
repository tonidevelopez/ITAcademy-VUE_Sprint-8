<template>
  <div class="nav-login">
    <div class="logged">
      <a><span v-if="!logged" @click="toggleLoginModal">LOG IN</span><span v-else @click="logOut">LOG OUT</span></a>
      <a @click="toggleRegisterModal">SIGN UP</a>
    </div>
    <div class="logo">
      <router-link to="/"><img src="@/assets/StarWarsLogo.png" alt="Star Wars Logo"></router-link>
    </div>
  </div>
  <nav>
    <router-link to="/">HOME</router-link>
    <router-link to="/starships">STARSHIPS</router-link>
    <router-link to="/characters">CHARACTERS</router-link>
  </nav>
  <div v-if="loginModal">
    <LogIn />
  </div>
  <div v-if="registerModal">
    <SignUp />
  </div>
</template>

<script>
import LogIn from "@/components/LogIn.vue";
import SignUp from "@/components/SignUp.vue";
import { mapMutations, mapState } from "vuex";

export default {
  components: { LogIn, SignUp },

  computed: {
    ...mapState(["loginModal", "registerModal", "logged", "loggedUser"])
  },
  methods: {
    ...mapMutations(["toggleLoginModal", "toggleRegisterModal", "logOut"])
  }
}
</script>

<style scoped>
.nav-login {
  margin: 1rem;
}

.logo img {
  width: 200px;
}

.logged {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}

.logged a:hover {
  cursor: pointer;
  color: #FFFFFF;
}
</style>