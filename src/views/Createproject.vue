<template>
  <div class="createproject">
    <h1>Please enter project name</h1>
    <v-text-field placeholder="Project name"></v-text-field><br>
    <v-btn v-on:click="">Create project!</v-btn>
  </div>
</template>

<script>
let saveInJn = function () {
  this.$http.post('/public/createproject', this.projects)
      .then(response => {
        this.project = response.data
        this.errorText = ''

      })
      .catch(error => {
        this.errorText = error.response.data.errorMessage
        this.project = ''
      })
}

export default {
  name: 'Createproject',
  components: {},
  data: function () {
    return {
      projects: {},
      project: '',
      errorText: '',
    }
  },
  methods: {
    saveInHtml: saveInJn
  }
}
</script>
