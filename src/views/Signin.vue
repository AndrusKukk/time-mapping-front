<template>
  <div class="signin">
    <v-form v-model="valid" lazy-validation style="text-align: center">
      <h1>Please sign in</h1><br>
      <v-text-field v-model="logins.email" required :rules="logins.emailRules" label="Email"></v-text-field>
      <br>
      <v-text-field v-model="logins.password" type="password" required :rules="logins.passwordRules"
                    label="Password"></v-text-field>
      <br>
      <v-dialog
          transition="dialog-bottom-transition"
          max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn :disabled="!valid" @click="saveInHtml()" @keyup.enter="saveInHtml()" color="success" v-bind="attrs"
                 v-on="on">Sign in
          </v-btn>
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
              <h3>{{ login }}</h3>
              <h3>{{ errorText }}</h3>
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
  this.$http.post('/public/login', this.logins)
      .then(response => {
        this.errorText = ''
        localStorage.setItem('user-token', response.data)
        this.$http.defaults.headers.common['Authorization'] = "Bearer " + response.data
        this.login = 'Sign in successful.'
        setTimeout(function () {
          location.reload()
        }, 4000)
      })
      .catch(error => {
        this.errorText = error.response.data.errorMessage
        this.login = ''
      })
}
export default {
  name: 'Login',
  components: {},
  data: function () {
    return {
      valid: true,
      logins: {
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
        ],
        password: '',
        passwordRules: [
          v => !!v || 'Password is required',
        ],
      },
      login: '',
      errorText: ''
    }
  },
  methods: {
    saveInHtml: saveInJn
  }
}
</script>