<template>
  <div id="app" class="signup" >
    <h1>Check your activity data</h1><br>
    <v-text-field v-model="activityName" placeholder="Activity name" ></v-text-field><br>
    <v-text-field v-model="userId" placeholder="User id" ></v-text-field><br><br>
    <v-date-picker v-model="startTime"> </v-date-picker><br><br>
    <v-date-picker v-model="stopTime" ></v-date-picker><br><br>
    <v-btn v-on:click="saveInHtml()">Check your data!</v-btn><br><br>
    <h5 align="center">{{errorText}}</h5>
  </div>
</template>

<script>
export default {
  name: "DataSingleActivity"
}
</script>

<style scoped>

</style>