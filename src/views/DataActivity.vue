<template>
  <div id="app" class="data">
    <v-form v-model="valid" lazy-validation style="text-align: center">
      <h1>Check your activity data</h1><br>
      <v-text-field v-model="activityName" required :rules="nameRules" label="Activity name"></v-text-field>
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
            >Your activity data:
            </v-toolbar>
            <v-card-text>
              <table>
                <br>
                <tr v-show="dataActivity" style="text-align: center">
                  <th>activity name |</th>
                  <th> hours spent |</th>
                  <th>cost (EUR)</th>
                </tr>
                <tr v-for="row in dataActivity" style="text-align: center">
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
  this.$http.get('/time/data/activity', {
    params: {
      activityName: this.activityName,
      startTime: this.startTime, stopTime: this.stopTime
    }
  })
      .then(response => {
        this.dataActivity = response.data
        this.errorText = ''

      })
      .catch(error => {
        this.errorText = error.response.data.errorMessage
        this.dataActivity = ''
      })
}

export default {
  name: 'DataActivity',
  components: {},
  data: function () {
    return {
      valid: true,
      activityName: '',
      nameRules: [
        v => !!v || 'Activity name is required',
      ],
      startTime: this.startTime,
      stopTime: this.stopTime,
      dataActivity: '',
      errorText: '',
    }
  },
  methods: {
    saveInHtml: saveInJn
  }
}
</script>