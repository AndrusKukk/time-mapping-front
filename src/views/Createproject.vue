<template>
  <div class="createproject">
    <v-form v-model="valid" lazy-validation style="text-align: center">
      <h1>Please create your project</h1><br>
      <v-text-field v-model="projects.projectName" label="Project name" required :rules="projects.nameRules"></v-text-field>
      <br>
      <v-btn :disabled="!valid" @click="saveInHtml()" color="success">Create project</v-btn>
    </v-form>
  </div>
</template>

<script>
let saveInJn = function () {
  this.$http.post('/time/createproject', this.projects)
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
      valid: true,
      projects: {
        projectName: '',
        nameRules: [
          v => !!v || 'Project name is required',
        ],
        project: '',
        errorText: '',
      }
    }
  },

  methods: {
    saveInHtml: saveInJn
  }
}
</script>
