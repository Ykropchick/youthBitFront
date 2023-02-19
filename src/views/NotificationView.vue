<template>
  <div class="container d-flex justify-content-center">
    <div class="block">
     <div class="row">
       <div class="col"><h4>Тема:</h4></div>
       <div class="col">{{notification.title}}</div>
     </div>
      <div class="row">
        <div class="col"><h4>От:</h4></div>
        <div class="col">{{notification.sender}}</div>
      </div>
      <div class="row">
        <div class="col"><h4>Получено:</h4></div>
        <div class="col">{{notification.date}}</div>
      </div>
      <div>
        {{notification.description}}
      </div>

    </div>
  </div>


</template>

<script>
import axios from "axios";

export default {
  name: "NotificationView",
  data(){
    return{
      notification:{},
    }
  },
  created() {
    axios
        .get(`/api/notifications/${this.notificationId}/`)
        .then(response =>{
          this.notification = response.data
        })
        .catch(error => {
          console.log(error)
        })
  },
  computed: {
    notificationId(){
      return this.$route.params.id
    }

  }
}
</script>

<style scoped>
.block{
  min-width: 50vw;
  min-height: 50vh;
  border: solid 2px black;
}
</style>