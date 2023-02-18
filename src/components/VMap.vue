<template>
  <img class="rounded mx-auto d-block" src="../assets/map.jpg" id="map" alt="" usemap="#workmap">
  <map name="workmap">
    <area class="tutorial" @click="this.$router.push('/manuals/1')" shape="rect" coords="170,14,187,28"  alt="">
    <area class="tutorial" @click="this.$router.push('/manuals/2')" shape="rect" coords="86,136,106,145" alt="">
    <area class="tutorial" @click="this.$router.push('/manuals/3')" shape="rect" coords="158,245,174,259" alt="">
    <area class="tutorial" @click="this.$router.push('/manuals/4')" shape="rect" coords="114,332,131,344" alt="">
    <area class="tutorial" @click="this.$router.push('/manuals/5')" shape="rect" coords="125,426,143,441" alt="">
    <area class="tutorial" @click="this.$router.push('/manuals/6')" shape="rect" coords="111,503,130,514" alt="">
  </map>
</template>

<script>
export default {
  name: "VMap"
}
</script>

<style scoped>
.tutorial{
  cursor: pointer;
}
</style>