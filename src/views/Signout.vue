<template>
  <div class="signin">
    <v-form style="text-align: center">
      <v-dialog
          transition="dialog-bottom-transition"
          max-width="600">
        <template v-slot:activator="{ on, attrs }">
      <v-btn @click="signOut()" color="success" v-bind="attrs"
             v-on="on">Sign out</v-btn>
        </template>

        <template v-slot:default="dialog">
          <v-card>
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
                  @click="dialog.value = false"
              >Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-form>
  </div>
</template>

<script>
let removeToken = function () {
        localStorage.removeItem('user-token')
  this.signOutText = 'You are now signed out.'
}

export default {
  name: 'Signout',
  components: {},
  data: function () {
    return {
      signOutText: ''
    }
  },
  methods: {
    signOut: removeToken
  }
}
</script>