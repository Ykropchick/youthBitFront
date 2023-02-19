<template>
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
             class="img-fluid" alt="Phone image">
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form>
          <!-- Email input -->
          <div class="form-outline mb-4">
            <input v-model="email" type="email" id="form1Example13" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example13">Email address</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <input v-model="password" type="password" id="form1Example23" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example23">Password</label>
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">
            <!-- Checkbox -->
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
              <label class="form-check-label" for="form1Example3"> Remember me </label>
            </div>
            <a href="#">Forgot password?</a>
          </div>
          <div class="text-center">
            <button @click.prevent="logIn" class="btn btn-primary btn-lg btn-block">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "VLogInView",
  data(){
    return{
      email: '',
      password: '',
    }
  },
  methods: {
    logIn(){
      const data = {
        'email': this.email,
        'password': this.password,
      }

      axios
          .post('/api/auth/token/', data)
          .then(response => {
            const token = response.data.access
            axios.defaults.headers.common['Authorization'] = "Bearer " + token
            localStorage.setItem('token', token)
            this.$store.commit('setToken', token)
          })
          .catch(error =>{
            console.log(error)
          })
      axios
          .get('api/auth/me/')
          .then(response =>{
            console.log(response.data)
            const firstname = response.data.firstname
            const lastname = response.data.lastname
            const IsHr = response.data.is_HR
            localStorage.setItem('firstname', firstname)
            localStorage.setItem('lastname', lastname)
            localStorage.setItem('IsHr', IsHr)
            this.$store.commit('setUser', IsHr, firstname, lastname)
          })
          .catch(error =>{
            console.log(error)
          })
      this.$router.push('/')
    }

  }
}
</script>

<style scoped>
.btn{
  background: rgb(140,100,256);
}
</style>