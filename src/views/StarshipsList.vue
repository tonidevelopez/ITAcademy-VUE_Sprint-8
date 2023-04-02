<template>
  <div class="starshipsList" v-for="(starship, index) in starshipsList" :key="index">
    <router-link :to="{ name: 'starship', params: { id: getId(starship.url) } }">
      <h4>{{ starship.name.toUpperCase() }}</h4>
      <p>{{ starship.model }}</p>
    </router-link>
  </div>
  <button type="button" @click="moreStarships" v-show="starshipsList.length < 36">VIEW MORE...</button>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'StarshipsList',
  computed: {
    ...mapState(['starshipsList', 'currentPage'])
  },
  methods: {
    ...mapActions(['fetchStarships', 'fetchMoreStarships']),
    moreStarships() {
      this.fetchMoreStarships()
    },

    getId(url) {
      const IdNumber = url.replace(/\D/g, "");
      return IdNumber;
    }
  }
}
</script>

<style scoped>
.starshipsList {
  text-align: left;
  background-color: #1D1E1F;
  max-width: 60%;
  margin: 0 auto;
}

a:hover {
  color: #ffffff;
}

a {
  text-decoration: none;
  color: #AAAAAA;
}

h4 {
  padding: 10px 0 0 10px;
}

p {
  font-weight: 400;
  padding: 0 0 10px 10px;
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
