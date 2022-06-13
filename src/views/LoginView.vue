<template>
  <div class="login">
    <div class="aside">
      <div class="img-container">
        <img alt="Star wars logo" src="../assets/star-wars.png" />
      </div>
    </div>
    <div class="form-container">
      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/organisms/LoginForm.vue";

export default {
  name: "HomeView",
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
.login,
.aside,
.form-container {
  display: flex;
}
.aside,
.form-container {
  align-items: center;
  justify-content: center;
}
.login {
  min-height: 100vh;
  height: 100%;
}
.aside {
  background: #031434;
  padding: 0 48px;
  width: 30%;
}
.img-container {
  /* min-width: 385px; */
  width: 24rem;
  height: 10.4rem;
}
.img-container img {
  width: 100%;
  height: 100%;
}
.form-container {
  /* width: 100%; */
  width: 70%;
}

/* sm -> 576px, m 768px, xm 992px and 1200px */
@media (max-width: 924px) {
  .login {
    flex-direction: column;
  }
  .aside {
    display: none;
  }
  .form-container {
    height: 100vh;
    width: 100%;
  }
}
</style>
