<template>
  <div class="mapImage rounded mx-auto d-block">
    <img src="../assets/map.jpg" id="map" alt="" usemap="#workmap">
    <VWindowMap :show="show[0]" :name="name[0]" :description="description[0]" :coords="[170, 14]"/>
    <VWindowMap :show="show[1]" :name="name[1]" :description="description[1]" :coords="[86, 136]"/>
    <VWindowMap :show="show[2]" :name="name[2]" :description="description[2]" :coords="[158, 145]"/>
    <VWindowMap :show="show[3]" :name="name[3]" :description="description[3]" :coords="[114, 332]"/>
    <VWindowMap :show="show[4]" :name="name[4]" :description="description[4]" :coords="[125, 426]"/>
    <VWindowMap :show="show[5]" :name="name[5]" :description="description[5]" :coords="[111, 503]"/>
  </div>
  <map name="workmap">
    <area class="tutorial" @mouseover="show[0] = true" @mouseleave="show[0] = false" @click="this.$router.push('/manuals/1')" shape="rect" coords="170,14,187,28"  alt="">
    <area class="tutorial" @mouseover="show[1] = true" @mouseleave="show[1] = false"  @click="this.$router.push('/manuals/2')" shape="rect" coords="86,136,106,145" alt="">
    <area class="tutorial" @mouseover="show[2] = true" @mouseleave="show[2] = false"  @click="this.$router.push('/manuals/3')" shape="rect" coords="158,245,174,259" alt="">
    <area class="tutorial" @mouseover="show[3] = true" @mouseleave="show[3] = false"  @click="this.$router.push('/manuals/4')" shape="rect" coords="114,332,131,344" alt="">
    <area class="tutorial" @mouseover="show[4] = true" @mouseleave="show[4] = false"  @click="this.$router.push('/manuals/5')" shape="rect" coords="125,426,143,441" alt="">
    <area class="tutorial" @mouseover="show[5] = true" @mouseleave="show[5] = false"  @click="this.$router.push('/manuals/6')" shape="rect" coords="111,503,130,514" alt="">
  </map>
</template>

<script>
import VWindowMap from "@/components/VWindowMap.vue";

export default {
  components: {VWindowMap},
  data() {
    return{
      show: [false, false, false, false, false, false],
      name: ['Основаная информация', '2', '3', '4', '5', '6'],
      description: ['Это будет ваш первый уровень, тут вы узнаете, полезные контакты, ближайшие бары', '22', '33', '44', '55', '66'],

    }
  },
  methods:{
    showTest(){
      console.log("Yes")
      this.show[0] = true
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