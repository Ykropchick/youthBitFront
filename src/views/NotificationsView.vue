<template>
  <div class="container">
    <div class="row notification_block d-flex justify-content-center" @click="$router.push(`notifications/${notification.pk}`)" v-for="notification in this.notifications" >

      <div class="text-center">
      </div>
      {{notification.title}}
      <div class="text-center">
        От: {{notification.sender}}
      </div>
      <div class="text-end">
        {{notification.date}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Notifications",
  data(){
    return{
      notifications:{},
    }
  },
  created() {
    axios
        .get('/api/notifications/')
        .then(response =>{
          this.notifications = response.data
        })
        .catch(error =>{
          console.log(error)
        })
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
