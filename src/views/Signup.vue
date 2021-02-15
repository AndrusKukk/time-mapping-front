<template>
  <div id="app" class="text-xs-center" >
    <h1>Please sign up</h1><br>
    <v-text-field v-model="users.firstName" placeholder="First name" ></v-text-field><br><br>
    <v-text-field v-model="users.lastName" placeholder="Last name" ></v-text-field><br><br>
    <v-text-field v-model="users.email" placeholder="Email" ></v-text-field><br><br>
    <v-text-field v-model="users.password" type="password" placeholder="Password"></v-text-field><br><br>
    <v-btn v-on:click="saveInHtml()">Sign up!</v-btn><br><br>
    <h5 align="center">{{errorText}}</h5>
  </div>
</template>
<script>

let saveInJn = function () {
  this.$http.post('/public/createuser', this.users)
      .then(response =>{this.user = response.data
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
      users: {},
      user:'',
      errorText:'',
    }
  },
  methods: {
    saveInHtml: saveInJn
  }
}

</script>

