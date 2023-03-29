<template>
  <Header />
  <router-view />
</template>

<script>
import { mapActions } from 'vuex';
import Header from '@/components/Header.vue';

export default {
  components: {
    Header
  },
  methods: {
    ...mapActions(['fetchStarships']),
  },
  mounted() {
    this.fetchStarships()
  }
}
</script>

<style>
#app {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-align: center;
}
</style>
