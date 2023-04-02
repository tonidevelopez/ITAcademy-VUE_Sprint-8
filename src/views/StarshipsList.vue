<template>
  <div v-for="(starship, index) in starshipsList" :key="index">
    <router-link :to="{ name: 'starship', params: { id: getId(starship.url) } }">
      <h5>{{ starship.name }}</h5>
      <p>{{ starship.model }}</p>
    </router-link>
  </div>
  <button type="button" @click="moreStarships" v-show="starshipsList.length < 36">View more</button>
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
a {
  text-decoration: none;
  color: black;
}

h5 {
  padding-top: 10px;
}
</style>
