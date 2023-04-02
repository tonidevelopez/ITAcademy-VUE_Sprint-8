<template>
  <div class="home">
    <h1>Welcome to this Statships Databank</h1>
    <h2>May the Force of VUE be with you!</h2>
    <router-link to="/starships">
      <button>STARSHIPS DATABANK</button>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
}
</script>

<style scoped>
.home {
  margin-top: 100px;
}

button {
  margin-top: 50px;
}
</style>
