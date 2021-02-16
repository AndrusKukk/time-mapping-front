<template>
  <div id="app" class="text-xs-center">
    <v-form v-model="valid" lazy-validation style="text-align: center">
      <h1>Please sign up</h1><br>
      <v-text-field v-model="users.firstName" label="First name"></v-text-field>
      <br>
      <v-text-field v-model="users.lastName" label="Last name"></v-text-field>
      <br>
      <v-text-field v-model="users.email" :rules="users.emailRules" required label="Email"></v-text-field>
      <br>
      <v-text-field v-model="users.password" :rules="users.passwordRules" required type="password" label="Password"></v-text-field>
      <br>
      <v-dialog
          transition="dialog-bottom-transition"
          max-width="600">
        <template v-slot:activator="{ on, attrs }">
      <v-btn :disabled="!valid" @click="saveInHtml()" color="success" v-bind="attrs"
             v-on="on">Sign up</v-btn>
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
              <h3>{{user}}</h3>
              <h3>{{errorText}}</h3>
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

let saveInJn = function () {
  this.$http.post('/public/createuser', this.users)
      .then(response => {
        this.user = response.data
        this.errorText = ''

      })
      .catch(error => {
        this.errorText = error.response.data.errorMessage
        this.user = ''
      })
}

export default {
  name: 'Signup',
  components: {},
  data: function () {
    return {
      valid: true,
      users: {
        firstName: '',
        lastName: '',
        password: '',
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 7) || 'Password must be at least 7 characters',
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ]
      },
      user: '',
      errorText: '',
    }
  },

  methods: {
    saveInHtml : saveInJn
    },
}
</script>

