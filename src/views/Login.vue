<template>
  <div class="bg-color">
    <div>
      <Navbar />
    </div>
    <b-container fluid class="margin-top">
      <b-row class="justify-content-center">
        <b-col lg="6" md="8" sm="8" cols="10">
          <b-card>
            <b-form @submit="onSubmit" v-if="show">
              <b-form-group
                id="input-group-1"
                label="آدرس ایمیل:"
                label-for="input-1"
                description=""
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  placeholder="ایمیل خود را وارد کنید."
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="رمز عبور:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.password"
                  type="password"
                  placeholder="رمز عبور را وارد کنید."
                  required
                ></b-form-input>
              </b-form-group>
              <b-row class="justify-content-center">
                <b-col md="2" cols="3">
                  <b-button class="px-4 pb-2" type="submit" variant="secondary"
                    >ورود</b-button
                  >
                </b-col>
              </b-row>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "Login",
  components: {
    Navbar,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>
<style scoped>
.bg-color {
  background-color: #fff;
}
.margin-top {
  margin-top: 9rem;
}
</style>