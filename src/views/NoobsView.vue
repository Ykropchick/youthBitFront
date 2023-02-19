<template>
  <div class="container">
  <h1 class="text-center">Ваши нубики</h1>
  <div class="row">
    <div class="col-md-12 col-lg-6" v-for="user in this.users">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card mb-3" style="border-radius: .5rem;">
            <div class="row g-0">
              <div class="col-md-4 gradient-custom text-center text-white"
                style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                  alt="Avatar" class="img-fluid my-5" style="width: 80px;" />
                <h5>{{ user.firstname + " " + user.lastname}}</h5>
                <i class="far fa-edit mb-5"></i>
              </div>
              <div class="col-md-8">
                <div class="card-body p-4">
                  <h6>Информация</h6>
                  <hr class="mt-0 mb-4">
                  <div class="row pt-1">
                    <div class="col-6 align-self-center mb-3">
                      <h6>Эмайл</h6>
                      <p class="text-muted">{{ user.email }}</p>
                    </div>
                  </div>
                  <h6>Дополнительная информация</h6>
                  <hr class="mt-0 mb-4">
                  <div class="row pt-1">
                    <div class="col-6 mb-3">
                      <h6>Департамент</h6>
                      <p class="text-muted">{{user.department}}</p>
                    </div>
                    <div class="col-6 mb-3">
                      <h6>Должность</h6>
                      <p class="text-muted">{{user.position}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
import {useRoute} from "vue-router";

export default {
  name: "NoobsView",
  data(){
    return{
      users: []
    }
  },
  created() {
    axios
        .get('api/auth/me/suckers/')
        .then(response =>{
            
          this.users = response.data
          console.log(this.user)
        })
        .catch(error =>{
          console.log(error)
        })
  }
}
</script>

<style scoped>
.gradient-custom {
 background: rgb(140,100,256);
}
</style>
