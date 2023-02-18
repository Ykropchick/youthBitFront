<template>
  <div class="container">
    <VMap/>
    <h1 class="text-center team__header">Наша команда</h1>
    <div class="row d-flex justify-content-center">
      <div class="row">
        <div class="col-lg-4 col-md-12">
          <img class="office_image" src="../assets/office_1.png" alt="">
        </div>
        <div class="col-lg-4 col-md-12">
          <img class="office_image" src="../assets/office_2.png" alt="">
        </div>
        <div class="col-lg-4 col-md-12">
          <img class="office_image" src="../assets/office_3.png" alt="">
        </div>
      </div>
    </div>

    <h1 class="text-center team__header">Наш офис</h1>
    <div class="row d-flex justify-content-center">
      <div class="row">
        <div class="col-lg-4 col-md-12">
          <img class="office_image" src="../assets/team_1.png" alt="">
        </div>
        <div class="col-lg-4 col-md-12">
          <img class="office_image" src="../assets/team_2.png" alt="">
        </div>
        <div class="col-lg-4 col-md-12">
          <img class="office_image" src="../assets/team_3.png" alt="">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import VMap from "@/components/VMap.vue";

export default {
  name: "HomeView",
  components: {VMap},
  methods:{

  }
}
</script>

<style scoped>
.team__header{
  margin-top: 40px;
}
.office_image{
  height: 300px;
  margin-top: 20px;
  width: 100%;
}
</style>