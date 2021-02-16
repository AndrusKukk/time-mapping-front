<template>
  <div class="align-center">
    <v-form v-model="valid" lazy-validation style="text-align: center">
      <h1>Toggle your activity</h1><br>
      <v-text-field v-model="activities.projectName" label="Project name"></v-text-field>
      <br>
      <v-text-field v-model="activities.activityName" required :rules="activities.nameRules"
                    label="Activity name"></v-text-field>
      <br>
      <v-btn :disabled="!valid" @click="saveInHtml()" color="success"> Toggle </v-btn>
    </v-form>
  </div>
</template>

<script>

let saveInJn = function () {
  this.$http.put('/time/toggleactivity', this.activities)
      .then(response => {
        this.activity = response.data
        this.errorText = ''

      })
      .catch(error => {
        this.errorText = error.response.data.errorMessage
        this.activity = ''
      })
}

export default {
  name: 'Toggle',
  components: {},
  data: function () {
    return {
      valid: true,
      activities: {
        projectName: '',
        activityName: '',
        nameRules: [
          v => !!v || 'Activity name is required',
        ]
      },
      activity: '',
      errorText: '',
    }
  },
  methods: {
    saveInHtml: saveInJn
  }
}

</script>