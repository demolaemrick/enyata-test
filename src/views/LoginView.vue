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
}
.img-container {
  width: 385px;
  height: 167px;
}
.img-container img {
  width: 100%;
  height: 100%;
}
.form-container {
  width: 100%;
}
</style>
