<template>
<!--  <div class="align-items-center">-->
<!--    <img src="../assets/lkmap.svg" id="map" alt="">-->
<!--  </div>-->

  <img class="rounded mx-auto d-block" src="../assets/map.jpg" id="map" alt="" usemap="#workmap">
  <map name="workmap">
    <area @click="click(1)" coords="84,110,95,130" shape="rect" alt="">
    <area @click="click(2)" shape="rect" coords="158,124,169,144" alt="">
    <area @click="click(3)" shape="rect" coords="256,111,266,128" alt="">
    <area @click="click(4)" shape="rect" coords="343,156,352,174" alt="">
    <area @click="click(5)" shape="rect" coords="453,85,466,104" alt="">
    <area @click="click(6)" shape="rect" coords="573,169,582,187" alt="">
  </map>
</template>

<script>
export default {
  name: "HomeView",
  methods:{
    click(tutorial){
      console.log(tutorial)
    }
  }
}
</script>

<style scoped>
#map{
}
.tutorial_1{
  border: solid 10px black;
}
</style>