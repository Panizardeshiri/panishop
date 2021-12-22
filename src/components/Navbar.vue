<template>
  <div class="fonttype fixed-top">
    <b-navbar toggleable="lg" type="light" class="pos-out">
      <b-navbar-brand href="#" class="mt-1">دیجی مارکت</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" class="mt-2"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link class="nounderline nav-link mt-3" to="/" @click.native="scrolltotop"
            >
            خانه
          </router-link>
          <b-nav-item class="nav-link mt-2" @click="scrollto"
            >محصولات
          </b-nav-item>

          <router-link class="nounderline nav-link mt-3" to="/login">
          <b-icon icon="person-fill"></b-icon>
            ورود
          </router-link>
          <router-link class="nounderline nav-link mt-3" to="/signin"
            > <b-icon icon="arrow-bar-up"></b-icon>
            عضویت
          </router-link>
          <b-nav-item class="nav-link mt-2" @click="scrolltodown"
            >ارتباط با ما
          </b-nav-item>
          
        </b-navbar-nav>
      </b-collapse>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="pos-in">
        <b-nav-form class="d-none d-sm-none d-md-block">
          <b-form-input
            size="sm"
            class="mr-sm-2 mx-1"
            placeholder="جستجو"
          ></b-form-input>

          <b-button size="sm" class="my-2 my-sm-0" type="submit">
            <b-icon icon="search"></b-icon>
          </b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    scrollto() {
      window.scrollTo({
        top: 630,
        left: 100,
        behavior: "smooth",
      })

    },
    scrolltodown(){
        window.scrollTo(0,document.body.scrollHeight)

      // window.scrollTo({
      //   top: 3400,
      //   left: 100,
      //   behavior: "smooth",
      // })
    },
    scrolltotop(){
      window.scrollTo({
        top:0,
        left:100,
        behavior:'smooth'
      })
    }
  },
};
</script>

<style scoped>
.fonttype {
  background-color: rgb(226, 221, 221);
  font-family: iran-sans;
}
.nounderline {
  font-size: 15px;
  text-decoration: none !important;
}

input {
  outline: none;
}
.pos-out {
  position: relative;
}
.pos-in {
  position: absolute;
  top: 1.5rem;
  left: 6rem;
}
</style>

    


