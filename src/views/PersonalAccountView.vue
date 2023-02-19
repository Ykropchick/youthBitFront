<template>
<div class="container py-5">
    <div class="row">
      <div class="col-lg-4">
        <div class="card mb-4">
          <div class="card-body text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="avatar"
              class="rounded-circle img-fluid" style="width: 150px;">
            <h5 class="my-3">{{data.firstname + " " + data.lastname}}</h5>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card mb-4">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Полное имя</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{{data.firstname + " " + data.lastname}}</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Эмайл</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{{data.email}}</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Департамент</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{{data.department}}</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Должность</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{{data.position}}</p>
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

export default {
  name: "PersonalAccountView",
  data(){
    return{
      data: {}
    }
  },
  created() {
    axios
        .get('/api/auth/me/')
        .then(response =>{
          this.data = response.data
          console.log(this.data)
        })
        .catch(error =>{
          console.log(error)
        })
  }
}
</script>

<style scoped>

</style>