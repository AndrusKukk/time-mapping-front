<template>
  <div class="createactivity">
    <div class="d-flex justify-center mb-12">
      <h2 class="font-weight-light">Enter activity information</h2>
    </div>
    <v-text-field placeholder="Project id"></v-text-field><br>
    <v-text-field placeholder="User id"></v-text-field><br>
    <v-text-field placeholder="Activity name"></v-text-field><br>
    <v-text-field placeholder="Activity hourly rate"></v-text-field><br>
    <div class="d-flex justify-center mb-12">
      <v-btn v-on:click="">Create activity!</v-btn>
    </div>

  </div>
</template>

<script>

let saveInJn = function () {
  this.$http.post('/public/createactivity', this.activities)
      .then(response =>{this.activity = response.data
        this.errorText = ''

      })
      .catch(error => {
        this.errorText = error.response.data.errorMessage
        this.activity = ''
      })
}

export default {
  name: 'Createactivity',
  components: {},
  data: function () {
    return {
      activities: {},
      activity:'',
      errorText:'',
    }
  },
  methods: {
    saveInHtml: saveInJn
  }
}

</script>
