<template>
  <div id="app" class="signup" >
    <h1>Check your activity data</h1><br>
    <input v-model="activityName" placeholder="Activity name" ><br><br>
    <input v-model="userId" placeholder="User id" ><br><br>
    <v-date-picker v-model="startTime"> </v-date-picker> <v-date-picker v-model="stopTime" ></v-date-picker>
    <button v-on:click="saveInHtml()">Check your data!</button><br><br>
    <h5 align="center">{{errorText}}</h5>
  </div>
</template>

<script>
let saveInJn = function () {
  this.$http.get('/public/data/activity', {params: {activityName: this.activityName, userId: this.userId,
      startTime: this.startTime, stopTime: this.stopTime}})
      .then(response =>{this.dataActivity = response.data
        this.errorText = ''

      })
      .catch(error => {
        this.errorText = error.response.data.errorMessage
        this.dataActivity = ''
      })
}

export default {
  name: 'DataSingleActivity',
  components: {},
  data: function () {
    return {
      dataActivity:'',
      errorText:'',
    }
  },
  methods: {
    saveInHtml: saveInJn
  }
}
</script>