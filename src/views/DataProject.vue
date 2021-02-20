<template>
  <div id="app" class="data">
    <v-form v-model="valid" lazy-validation style="text-align: center">
      <h1>Check the time spent on your project</h1><br>
      <v-row>
      <v-select
          :items="items"
          item-text="projectName"
          item-value="projectId"
          dense
          v-model="projectId" required :rules="nameRules" label="Select your project">
      </v-select>
      </v-row>
      <br>
      <v-row justify="space-around">
        <v-date-picker color="grey"
                       v-model="startTime"
        ></v-date-picker>
        <v-date-picker color="grey"
                       v-model="stopTime"
        ></v-date-picker>
      </v-row>

      <v-dialog
          transition="dialog-bottom-transition"
          max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn :disabled="!valid" @click="saveInHtml()" color="success" v-bind="attrs"
                 v-on="on">Check your data
          </v-btn>
        </template>

        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
                color="warning"
                dark
            >Your project data:
            </v-toolbar>
            <v-card-text>
              <table>
                <br>
                <tr v-show="dataProject" style="text-align: center">
                  <th>project name |</th>
                  <th> last name |</th>
                  <th> activity name |</th>
                  <th> hours spent |</th>
                  <th> cost (EUR)</th>
                </tr>
                <tr v-for="row in dataProject" style="text-align: center">
                  <td>{{ row.projectName }}</td>
                  <td>{{ row.lastName }}</td>
                  <td>{{ row.activityName }}</td>
                  <td>{{ row.hours }}</td>
                  <td>{{ row.cost }}</td>
                </tr>
              </table>
              <h3>{{ errorText }}</h3>
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
  this.$http.get('/time/data/project', {
    params: {
      projectId: this.projectId,
      startTime: this.startTime,
      stopTime: this.stopTime
    }
  })
      .then(response => {
        this.dataProject = response.data
        this.errorText = ''

      })
      .catch(error => {
        this.errorText = error.response.data.errorMessage
        this.dataProject = ''
      })
}

export default {
  name: 'DataProject',
  components: {},
  data: function () {
    return {
      items: [],
      valid: true,
      projectId: this.projectId,
      nameRules: [
        v => !!v || 'Project name is required',
      ],
      startTime: this.startTime,
      stopTime: this.stopTime,
      dataProject: '',
      errorText: ''
    }
  },
  methods: {
    saveInHtml: saveInJn
  },
  mounted() {
    const token = localStorage.getItem('user-token')
    if (token) {
      this.$http.defaults.headers.common['Authorization'] = "Bearer " + token
    }
    this.$http.get( 'time/data/projectslist')
        .then(response => {
          this.items = response.data
        });
  }
}
</script>