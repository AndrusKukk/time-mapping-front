<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Time your professional or domestic activities and get some insights!<br>
    <h3>Creators</h3>
    <ul>
      <li><a href="https://www.linkedin.com/in/andruskukk" target="_blank" rel="noopener">Andrus</a></li>
      <li><a href="https://www.linkedin.com/in/kadri-kukk-84457756" target="_blank" rel="noopener">Kadri</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
