<template>
  <VNavBar/>
  <router-view/>
</template>


<script>

import VNavBar from "@/components/VNavBar.vue";

export default {
  name:'App',
  components:{VNavBar}
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
