<template>
  <div id="app">
    <div class="d-flex justify-center mb-6">
      <h2 class="font-weight-light" >Sign up</h2><br>
    </div>
    <v-text-field v-model="users.firstName" placeholder="First name" ></v-text-field><br>
    <v-text-field v-model="users.lastName" placeholder="Last name" ></v-text-field><br>
    <v-text-field v-model="users.email" placeholder="Email" ></v-text-field><br>
    <v-text-field v-model="users.password" type="password" placeholder="Password"></v-text-field><br>
    <div class="d-flex justify-center mb-6">
      <v-btn v-on:click="saveInHtml()">Sign up!</v-btn><br>
      <h5>{{errorText}}</h5>
    </div>


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

