<template>
  <div class="home">
    <h1>Welcome to this Starships & Characters Databank</h1>
    <h3>(only for registered users)</h3>
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
  color: #ffffff;
}

button {
  margin-top: 50px;
}
</style>
