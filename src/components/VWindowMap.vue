<template>
  <div class="window" v-if="show" :style="{top: coords[0]}">
    <h3 class="text-center">{{this.name}}</h3>
    <p class="text-center">{{this.description}}</p>
  </div>
</template>

<script>
export default {
  name: "VWindowMap",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    coords: {
      type: Array,
      default: [],
    },
  },

}
</script>

<style scoped>
.window{
  width: 200px;
  height: 200px;
  border: solid 2px black;
  color: black;
  background: rgb(140,100,256);
  position: absolute;
  top: v-bind(coords[1] + 'px');
  left: v-bind(coords[0] + 40 + 'px');
}
</style>