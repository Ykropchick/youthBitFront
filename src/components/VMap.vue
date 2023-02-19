<template>
<!--  <div v-for="(module, index) in this.modules" >-->
<!--    <VWindowMap :show="show[index]" :name="module.name" :description="module.description" :coords="this.coords[index]"/>-->

<!--  </div>-->
<!--  <VWindowMap :show="true" :name="this.modules[0].name" :description="this.modules[0].description" :coords="[170, 14]"/>-->
  <div class="mapImage rounded mx-auto d-block">
    <img src="../assets/map.jpg" id="map" alt="" usemap="#workmap">
    <div v-for="(module, index) in this.modules" >
      <VWindowMap :show="show[index]" :name="module.name" :description="module.description" :coords="this.coords[index]"/>
    </div>
  </div>

  <map name="workmap">
    <area class="tutorial" @mouseover="show[0] = true" @mouseleave="show[0] = false" @click="this.$router.push('/modules/1')" shape="rect" coords="170,14,187,28"  alt="">
    <area class="tutorial" @mouseover="show[1] = true" @mouseleave="show[1] = false"  @click="this.$router.push('/modules/2')" shape="rect" coords="86,136,106,145" alt="">
    <area class="tutorial" @mouseover="show[2] = true" @mouseleave="show[2] = false"  @click="this.$router.push('/modules/3')" shape="rect" coords="158,245,174,259" alt="">
    <area class="tutorial" @mouseover="show[3] = true" @mouseleave="show[3] = false"  @click="this.$router.push('/modules/4')" shape="rect" coords="114,332,131,344" alt="">
    <area class="tutorial" @mouseover="show[4] = true" @mouseleave="show[4] = false"  @click="this.$router.push('/modules/5')" shape="rect" coords="125,426,143,441" alt="">
    <area class="tutorial" @mouseover="show[5] = true" @mouseleave="show[5] = false"  @click="this.$router.push('/modules/6')" shape="rect" coords="111,503,130,514" alt="">
  </map>
</template>

<script>
import VWindowMap from "@/components/VWindowMap.vue";

export default {
  components: {VWindowMap},
  data() {
    return{
      show: [false, false, false, false, false, false],
      coords: [[170, 14], [86, 136], [158, 145], [114, 332], [125, 426], [111, 503],],
    }
  },
  props: {
    modules: {
      type:Object,
      default: {},
    }
  },
  name: "VMap",
}
</script>

<style scoped>
.tutorial{
  cursor: pointer;
}
.mapImage{
  position: relative;
  width: 271px;
  height: 600px;
}
</style>