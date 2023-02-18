<template>
  <h3 class="name text-center">{{this.name}}</h3>
  <p class="description">{{this.description}}</p>
</template>

<script>
export default {
  name: "VManualBlock",
  props:{
    name:{
      type:String,
      default: ''
    },
    description:{
      type:String,
      default: ''
    }
  }
}
</script>

<style scoped>
.name{

}
.description{

}
</style>