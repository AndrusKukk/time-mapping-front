<template>
  <v-app>
  <div id="app">
      <div id="nav" class="d-flex align-center">
          <router-link to="/">Home</router-link> |
          <router-link to="/signup">Sign up</router-link> |
          <router-link to="/signin">Sign in</router-link> |
          <router-link to="/createproject">Create project</router-link> |
          <router-link to="/createactivity">Create activity</router-link> |
          <router-link to="/datasingleactivity">Data</router-link> |
      </div>
    <router-view/>
    </div>
  </v-app>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: dimgrey;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: dimgray;
}

</style>
