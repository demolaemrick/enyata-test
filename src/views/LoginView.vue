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
// @ is an alias to /src
import LoginForm from "@/components/organisms/LoginForm.vue";

export default {
  name: "HomeView",
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
.login {
  display: flex;
  min-height: 100vh;
  height: 100%;
}
.aside {
  background: #031434;
  display: flex;
  align-items: center;
  justify-content: center;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
