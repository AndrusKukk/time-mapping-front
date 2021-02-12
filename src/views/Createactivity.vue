<template>
  <div class="createactivity">
    <h1>Please enter activity information</h1>
    <input placeholder="Project id"><br><br>
    <input placeholder="User id"><br><br>
    <input placeholder="Activity name"><br><br>
    <input placeholder="Activity hourly rate"><br><br>
    <button v-on:click="">Create activity!</button>
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
