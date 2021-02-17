<template>
  <nav class="mx-auto overflow-hidden">


    <v-app-bar flat app>
      <v-app-bar-nav-icon class="black--text" v-click-outside="onClickOutside"
                          @click="drawer = true"></v-app-bar-nav-icon>
      <!--      <v-spacer></v-spacer>-->

      <v-toolbar-title class="text-uppercase black--text">
        <span class="font-weight-light">Time</span>
        <span>mapper</span>
      </v-toolbar-title>
      <v-icon
          max-height="30"
          max-width="30"
      >mdi-timer-outline
      </v-icon>

      <!--      <v-spacer></v-spacer>-->
    </v-app-bar>


    <v-navigation-drawer v-model="drawer" app class="indigo">
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-on:click="signOut()">
          <v-list-item-content>
            <v-list-item-title class="white--text">Sign out</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-card v-show="signOutText"
            max-width="600"
            class="mx-auto my-12"
    >
      <v-toolbar
          color="warning"
          dark
      >
      </v-toolbar>
      <v-card-text>
        <br>
        <h3>{{ signOutText }}</h3>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn
            text
            @click="signOutText=''"
        >Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </nav>
</template>

<script>

let removeToken = function () {
  localStorage.removeItem('user-token')
  this.signOutText = 'You are now signed out.'
}

export default {
  components: {},
  data() {
    return {
      drawer: false,
      links: [
        {text: 'Home', route: '/'},
        {text: 'Sign up', route: '/signup'},
        {text: 'Sign in', route: '/signin'},
        {text: 'Create project', route: '/createproject'},
        {text: 'Create activity', route: '/createactivity'},
        {text: 'Timer', route: '/toggle'},
        {text: 'Activity analysis', route: '/dataactivity'},
        {text: 'Project analysis', route: '/dataproject'}
      ],
      signOutText: ''
    }
  }, methods: {
    onClickOutside() {
      this.drawer = false
    },
    signOut: removeToken
  },
}
</script>