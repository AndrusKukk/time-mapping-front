<template>
  <nav>
    <v-toolbar flat app>
      <v-app-bar-nav-icon class="black--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title class="text-uppercase black--text">
        <span class="font-weight-light">Time</span>
        <span>mapper</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-img
        src="@/assets/stopwatch.png"
        max-height="30"
        max-width="30"
      ></v-img>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="indigo">
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
  data(){
    return {
      drawer: false,
      links: [
        {text: 'Home', route: '/'},
        {text: 'Sign up', route: '/signup'},
        {text: 'Sign in', route: '/signin'},
        {text: 'Create project', route: '/createproject'},
        {text: 'Create activity', route: '/createactivity'},
        {text: 'Activity analysis', route: '/dataactivity'},
        {text: 'Project analysis', route: '/dataproject'},
        {text: 'Timer', route: '/toggle'},
        {text: 'Sign out', route: '/signout'},
      ]
    }
  }

}
</script>

<style scoped>

</style>