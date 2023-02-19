<template>

</template>

<script>
export default {
  name: "TestWindow",
  props: {
    show:{
      type:Boolean,
      default: false,
    }
  },
  created(){
    console.log(this.show)
  }

}
</script>

<style scoped>

</style>