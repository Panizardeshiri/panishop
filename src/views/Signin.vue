<template>
<div>
 <div>
    <Navbar/>

  </div>
  <div class="container">
    <div class="card mx-auto my-5" style="max-width: 35rem">
      <form>
        <div class="row mb-3 mx-auto my-5">
          <label for="inputEmail3" class="col-4 col-md-4 col-form-label"
            >نام</label
          >
          <div class="col-6 col-md-6">
            <input type="email" class="form-control" id="inputEmail3" />
          </div>
        </div>
        <div class="row mb-3 mx-auto my-5">
          <label for="inputEmail3" class="col-4 col-md-4 col-form-label"
            >نام خانوادگی</label
          >
          <div class="col-6 col-md-6">
            <input type="email" class="form-control" id="inputEmail3" />
          </div>
        </div>
        <div class="row mb-3 mx-auto">
          <label for="inputPassword3" class="col-4 col-md-4 col-form-label"
            >ایمیل</label
          >
          <div class="col-6 col-md-6">
            <input type="password" class="form-control" id="inputPassword3" />
          </div>
        </div>
        <div class="row mb-3 mx-auto my-5">
          <label for="inputEmail3" class="col-4 col-md-4 col-form-label"
            >رمز عبور</label
          >
          <div class="col-6 col-md-6">
            <input type="email" class="form-control" id="inputEmail3" />
          </div>
        </div>
        <div class="row mb-3 mx-auto my-5">
          <label for="inputEmail3" class="col-4 col-md-4 col-form-label"
            >تکرار رمز عبور</label
          >
          <div class="col-6 col-md-6">
            <input type="email" class="form-control" id="inputEmail3" />
          </div>
        </div>
        <div class="row mx-auto my-4 col-2 col-md-2">
          <button type="submit" class="btn btn-info px-4 py-2">عضویت</button>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'Signin',
  components: {
    Navbar
  }
  
}
</script>
