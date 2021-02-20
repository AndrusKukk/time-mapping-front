<template>
  <v-app>
    <Navbar/>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>

</template>

<script>
  import Navbar from "@/components/Navbar";
  import Footer from "@/components/Footer";
  import axios from "axios";

  export default {
    name: 'App',
    components: { Navbar, Footer },
    mounted() {

    }
  }
</script>
