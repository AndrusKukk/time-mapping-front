<template>
  <div id="app" class="data">
    <v-form v-model="valid" lazy-validation style="text-align: center">
      <h1>Check the time spent on your activity</h1><br>
      <v-row>
        <v-select
            :items="items"
            item-text="activityName"
            item-value="activityId"
            label="Select activity name"
            dense
            v-model="activityId" required :rules="nameRules">
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
      activityId: this.activityId,
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
      items: [],
      valid: true,
      activityId: this.activityId,
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
  },
  mounted() {
    const token = localStorage.getItem('user-token')
    if (token) {
      this.$http.defaults.headers.common['Authorization'] = "Bearer " + token
    }
    this.$http.get('time/data/activitieslist')
        .then(response => {
          this.items = response.data
        });
    // this.$http.get( '/time/data/activity')
  }
}
</script>