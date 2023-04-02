<template>
  <div class="logo">
    <router-link to="/">
      <img src="@/assets/StarWarsLogo.png" alt="Star Wars">
    </router-link>
  </div>
  <nav>
    <router-link to="/starships">STARSHIPS</router-link>
  </nav>
</template>

<style scoped>
.logo img {
  width: 200px;
  padding: 1rem;
}
</style>