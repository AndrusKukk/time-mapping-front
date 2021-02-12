<template>
  <div id="app" class="signup" >
    <h1>Please sign up</h1><br>
    <input id="app" v-model="users.firstName" placeholder="First name" ><br><br>
    <input id="app" v-model="users.lastName" placeholder="Last name" ><br><br>
    <input id="app" v-model="users.email" placeholder="Email" ><br><br>
    <input id="app" v-model="users.password" type="password" placeholder="Password"><br><br>
    <button v-on:click="saveInHtml()">Sign up!</button><br><br>
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

