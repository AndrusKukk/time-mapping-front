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
      <v-btn :disabled="!valid" @click="saveInHtml()" color="success">Sign up</v-btn>
      <br>
      <v-dialog-bottom-transition><h5 style="text-align:center">{{ errorText }}</h5></v-dialog-bottom-transition>
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

