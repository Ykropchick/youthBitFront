<template>
  <div class="container">
    <h1 class="text-center">Модуль {{manualsId}}</h1>
    <div class="row module_blocks d-flex justify-content-center">
      <div class="col-4 manualWindow" v-for="manual in this.manuals">
        <VManualBlock :name="manual.name" :description="manual.description"/>
      </div>
    </div>
  </div>
</template>

<script>
import VManualBlock from "@/components/VManualBlock.vue";

export default {
  name: "ModulesView",
  components: {VManualBlock},
  computed:{
    manualsId(){
      return this.$route.params.id
    }
  },
  data() {
    return{
      manuals: [
        {
          name: 'Обо всем',
          description: "Все обо всем"
        },
        {
          name: "Не о чем",
          description: "Все не о чем",
        },
        {
          name: "Не о чем",
          description: "Все не о чем",
        },
        {
          name: "Не о чем",
          description: "Все не о чем",
        },
        {
          name: 'Обо всем',
          description: "Все обо всем"
        },
        {
          name: "Не о чем",
          description: "Все не о чем",
        },
        {
          name: "Не о чем",
          description: "Все не о чем",
        },
        {
          name: "Не о чем",
          description: "Все не о чем",
        },
      ]
    }
  }

}
</script>

<style scoped>
.manualWindow{
  width: 300px;
  height: 300px;
  border: solid 2px black;
  margin: 10px;
}
.module_blocks{
  margin-top: 40px;
}
</style>