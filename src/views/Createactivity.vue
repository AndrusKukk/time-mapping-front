<template>
  <div class="align-center">
    <v-form v-model="valid" lazy-validation style="text-align: center">
    <h1>Please create your activity</h1><br>
    <v-text-field v-model="activities.projectName" label="Project name (optional)"></v-text-field><br>
    <v-text-field v-model="activities.activityName" required :rules="activities.nameRules" label="Activity name"></v-text-field><br>
    <v-text-field v-model="activities.activityHourlyRate" label="Activity hourly rate"></v-text-field><br>
      <v-dialog
          transition="dialog-bottom-transition"
          max-width="600">
        <template v-slot:activator="{ on, attrs }">
      <v-btn :disabled="!valid" @click="saveInHtml()" color="success" v-bind="attrs"
             v-on="on">Create activity</v-btn>
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
              <h3>{{activity}}</h3>
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
  this.$http.post('/time/createactivity', this.activities)
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
      valid: true,
      activities: {
        projectName: '',
        activityName: '',
        nameRules: [
          v => !!v || 'Activity name is required',
        ],
        activityHourlyRate: this.activityHourlyRate,
      },
      activity:'',
      errorText:'',
    }
  },
  methods: {
    saveInHtml: saveInJn
  }
}

</script>
