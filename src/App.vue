<template>
  <Header />
  <router-view />
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import Header from '@/components/Header.vue';

export default {
  components: {
    Header
  },
  methods: {
    ...mapActions(['fetchStarships', 'fetchCharacters']),
    ...mapMutations(['checkDataBase']),
  },
  mounted() {
    this.fetchStarships()
    this.checkDataBase()
    this.fetchCharacters()
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500&display=swap');

body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Barlow', Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: #AAAAAA;
  text-align: center;
  background-color: #000000;
  background-image: url('./assets/backgroundStars.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  background-attachment: fixed;
}

nav {
  background-color: #000000;
  border-bottom: 1px solid #AAAAAA;
  padding: 1rem 0;
}

nav a {
  color: #AAAAAA;
  text-decoration: none;
  padding: 1rem;
}

nav a:hover {
  color: #FFFFFF;
}

nav a.router-link-exact-active {
  color: #FFFFFF;
}

button {
  background-color: #1D1E1F;
  color: #AAAAAA;
  font-family: 'Barlow', Arial, Helvetica, sans-serif;
  font-weight: 500;
  border: 1px solid #AAAAAA;
  border-radius: 20px;
  padding: 10px 20px;
  margin-bottom: 20px;
  font-size: 1.1rem;
  cursor: pointer;
}

button:hover {
  color: #ffffff;
  border-color: #ffffff;
  background-color: #000000;
}
</style>
