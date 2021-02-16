<template>
  <div id="app" class="signup" >
    <div class="d-flex justify-center mb-6">
      <h2 class="font-weight-light">Check your activity data</h2><br>
    </div>

    <v-text-field v-model="activityName" placeholder="Activity name" ></v-text-field><br>
    <v-text-field v-model="userId" placeholder="User id" ></v-text-field><br><br>
    <v-date-picker v-model="startTime"> </v-date-picker><br>
    <v-date-picker v-model="stopTime" ></v-date-picker><br>
    <div class="d-flex justify-center mb-6">
      <v-btn v-on:click="saveInHtml()">Check your data!</v-btn><br>
    </div>


    <v-text-field v-model="activityName" placeholder="Activity name" ></v-text-field> <br>
    <v-text-field v-model="userId" placeholder="User id" ></v-text-field> <br>
    <v-date-picker v-model="startTime"> </v-date-picker> <v-date-picker v-model="stopTime" ></v-date-picker>
    <div class="d-flex justify-center mb-6">
      <v-btn v-on:click="saveInHtml()">Check your data!</v-btn><br>
    </div>


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