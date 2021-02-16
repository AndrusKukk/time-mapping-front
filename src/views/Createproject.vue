<template>
  <div class="createproject">
    <div class="d-flex justify-center mb-6">
      <h2 class="font-weight-light">Enter project name</h2>
    </div>
    <v-text-field placeholder="Project name"></v-text-field><br>
    <div class="d-flex justify-center mb-6">
      <v-btn v-on:click="">Create project!</v-btn>
    </div>

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
