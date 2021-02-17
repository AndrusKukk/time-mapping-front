<template>
  <div class="align-center">
    <v-form v-model="valid" lazy-validation style="text-align: center">
      <h1>Time your activity</h1><br>
      <v-text-field v-model="activities.projectName" label="Project name" :disabled="field"></v-text-field>
      <br>
      <v-text-field v-model="activities.activityName" required :rules="activities.nameRules"
                    label="Activity name" :disabled="field"></v-text-field>
      <br>
      <v-btn :disabled="!valid" @click="saveInHtml()" :color="color">{{ label }}
      </v-btn>
      <v-card v-show="errorText"
              max-width="600"
              class="mx-auto my-12"
      >
        <v-toolbar
            color="warning"
            dark
        >
        </v-toolbar>
        <v-card-text>
          <br>
          <h3>{{ errorText }}</h3>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn
              text
              @click="errorText=''"
          >Close
          </v-btn>
        </v-card-actions>
      </v-card>
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
  computed: {
    label: function () {
      if (this.activity) {
        return "Stop timer"
      } else {
        return "Start timer"
      }
    },
    field: function () {
      if (this.activity) {
        return true
      } else {
        return false
      }
    },
    color: function () {
      if (this.activity) {
        return "error"
      } else {
        return "success"
      }
    }
  },
  methods: {
    saveInHtml: saveInJn
  }
}

</script>