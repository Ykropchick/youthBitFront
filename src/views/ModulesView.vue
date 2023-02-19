<template>
  <div class="container">
    <h1 class="text-center">Модуль {{modulesId}}</h1>
    <div class="row module_blocks d-flex justify-content-center" >
      <div class="col-4 manualWindow" v-for="manual in this.manuals" @click="this.$router.push(`/modules/${modulesId}/${manual.pk}`)">
        <VManualBlock :name="manual.name" :description="manual.description"/>
      </div>
    </div>
  </div>
</template>

<script>
import VManualBlock from "@/components/VManualBlock.vue";
import axios from "axios";

export default {
  name: "ModulesView",
  components: {VManualBlock},
  computed:{
    modulesId(){
      return this.$route.params.id
    }
  },
  data() {
    return{
      manuals: []
    }
  },
  created() {
    axios
        .get(`/api/tutorials/${this.modulesId}`)
        .then(response =>{
          this.manuals = response.data
        }).catch(error =>{
          console.log(error)
        })
  }

}
</script>

<style scoped>
.manualWindow{
  width: 300px;
  height: 300px;
  border: solid 2px black;
  margin: 10px;
  cursor: pointer;
}
.module_blocks{
  margin-top: 40px;
}
</style>