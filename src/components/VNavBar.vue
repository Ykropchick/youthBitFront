<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light nav_container">
      <a @click="this.$router.push('/')" class="navbar-brand nav__logo">
        <span class="logo_word_beg">РОС</span><span class="logo_word_end">молодежь</span>
      </a>
      <button class="navbar-toggler nav__toggleButton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="navbar-brand" @click="$router.push('/notifications')">
              <span class="nav__item">Уведомления</span>
            </a>
          </li>
          <li class="nav-item" @click="this.$router.push('/noobs')" v-if="this.$store.state.IsHr">
            <a class="navbar-brand ">
              <span class="nav__item">Нубики</span>
            </a>
          </li>
          <li class="nav-item" v-else>
            <a class="navbar-brand ">
              <span class="nav__item">Департамент</span>
            </a>
          </li>
          <li class="nav-item " @click="this.$router.push('/personal-account')">
            <a class="navbar-brand ">
              <span class="nav__item">Личный кабинет</span>
            </a>
          </li>
          <li class="nav-item">
            <a @click="this.$router.push('/log-in')" class="navbar-brand ">
              <span class="nav__item">LogIn</span>
            </a>
          </li>
        </ul>
      </div>
  </nav>
</template>

<script >
export default {
  name: "VNavBar"
}
</script >

<style lang="scss">

.logo{
  cursor: pointer;
  &_word_beg{
    color: rgb(140,100,256);

  }
  &_word_end{
    color: rgb(253,203,0);
  }
}
.nav__item{
  color: rgb(0, 134, 255);
  cursor: pointer;
}
.navbar{
  margin-right: 5vh;
}
.navbar-brand{
  margin: 0 3vh;
}
.nav_container{
  width: 100%;
}
.nav__logo{
  cursor: pointer;
}
.nav__toggleButton{
  margin-right: 25px;
}
</style>