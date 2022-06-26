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

<style>
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
.form-container {
  width: 70%;
}
.login {
  height: 100vh;
}
.aside {
  background: #031434;
  padding: 0 48px;
  width: 30%;
}
.img-container {
  width: 24rem;
  height: 10.4rem;
}
.img-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.form-container {
  width: 70%;
}

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
