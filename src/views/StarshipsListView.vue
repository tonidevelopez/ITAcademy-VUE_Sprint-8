<template>
  <div v-for="(starship, index) in starshipsList" :key="index" class="starships-list">
    <router-link :to="{ name: 'starship' }">
      <h5>{{ starship.name }}</h5>
      <p>{{ starship.model }}</p>
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'StarshipsListView',
  computed: {
    ...mapState(['starshipsList'])
  },
  methods: {
    ...mapActions(['fetchStarships']),
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
