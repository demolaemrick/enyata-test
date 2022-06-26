<template>
  <div class="login">
    <div class="aside">
      <div class="img-container">
        <img alt="Star wars logo" src="../assets/star-wars.png" />
      </div>
    </div>
    <div class="form-container">
      <RegisterForm />
    </div>
  </div>
</template>

<script>
import RegisterForm from "@/components/organisms/RegisterForm.vue";

export default {
  name: "SignupView",
  components: {
    RegisterForm,
  },
};
</script>

<style>
</style>
