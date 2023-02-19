<template>
  <VNavBar/>
  <router-view/>
</template>


<script>

import VNavBar from "@/components/VNavBar.vue";
import axios from "axios";

export default {
  name:'App',
  components:{VNavBar},
  beforeCreate(){
    this.$store.commit('initializeStore')
    if (this.$store.state.token) {
      axios.defaults.headers.common['Authorization'] = "Bearer " + this.$store.state.token
    } else {
      axios.defaults.headers.common['Authorization'] = ""
    }

  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
