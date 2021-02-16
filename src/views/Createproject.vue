<template>
  <div class="createproject">
    <v-form v-model="valid" lazy-validation style="text-align: center">
      <h1>Please create your project</h1><br>
      <v-text-field v-model="projects.projectName" label="Project name" required
                    :rules="projects.nameRules"></v-text-field>
      <br>
      <v-dialog
          transition="dialog-bottom-transition"
          max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn :disabled="!valid" @click="saveInHtml()" color="success" v-bind="attrs"
                 v-on="on">Create project
          </v-btn>
        </template>

        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
                color="warning"
                dark
            >
            </v-toolbar>
            <v-card-text>
              <br>
              <h3>{{project}}</h3>
              <h3>{{errorText}}</h3>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                  text
                  @click="dialog.value = false"
              >Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>

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
