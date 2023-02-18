<template>
  <div class="container">
    <div class="row notification_block d-flex justify-content-center" @click="$router.push(`notifications/${notification.id}`)" v-for="notification in this.notifications" >
      <div class="text-center">
        {{notification.name}}
      </div>
      <div class="text-center">
        От: {{notification.from}}
      </div>
      <div class="text-end">
        {{notification.date}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notifications",
  data(){
    return{
      notifications:[
        {
          id: 0,
          name:"Hello",
          date:"12-02-03",
          from:"Vasya",
        },
        {
          id: 1,
          name:"Hello",
          date:"12-02-03",
          from:"Vasya",
        },
        {
          id: 2,
          name:"Hello",
          date:"12-02-03",
          from:"Vasya",
        },
        {
          id: 3,
          name:"Hello",
          date:"12-02-03",
          from:"Vasya",
        }
      ]
    }
  }
}
</script>

<style scoped>
.notification_block{
  border: solid 2px black;
  margin: 10px 0;
  cursor: pointer;
}
</style>