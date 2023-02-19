<template>

</template>

<script>
import axios from "axios";

export default {
  name: "ManualView",
  computed: {
    modulesId(){
      return this.$route.params.id
    },
    manualsId(){
      return this.$route.params.manualId
    }
  },
  created() {
    axios
        .get(`/api/tutorials/manual/${this.manualsId}`)
        .then(response => {
          console.log(response.data)
        })
  }
}
</script>

<style scoped>

</style>