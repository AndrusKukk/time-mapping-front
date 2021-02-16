<template>
  <div class="signin">
    <v-form v-model="valid" lazy-validation style="text-align: center">
    <h1>Please sign in</h1><br>
    <v-text-field v-model="logins.email" required :rules="logins.emailRules" label="Email"></v-text-field><br>
    <v-text-field v-model="logins.password" required :rules="logins.passwordRules" label="Password"></v-text-field><br>
    <v-btn :disabled="!valid" @click="saveInHtml()" color="success">Sign in</v-btn>
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
      })
      .catch(error => {
        this.errorText = error.response.data.errorMessage
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
      errorText: ''
    }
  },
  methods: {
    saveInHtml: saveInJn
  }
}
</script>