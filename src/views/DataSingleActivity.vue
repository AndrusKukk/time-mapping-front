<template>
  <div id="app" class="signup" >
    <h1>Check your activity data</h1><br>
    <input v-model="activityName" placeholder="Activity name" ><br><br>
    <input v-model="userId" placeholder="User id" ><br><br>
    <v-date-picker v-model="startTime"> </v-date-picker><br><br>
    <v-date-picker v-model="stopTime" ></v-date-picker><br><br>
    <button v-on:click="saveInHtml()">Check your data!</button><br><br>
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