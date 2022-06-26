<template>
  <div class="login-form-container">
    <h1 class="heading-text">Signup</h1>
    <p>Kindly enter your details to Register</p>
    <!-- form -->
    <form class="form" @submit="handleSubmit">
      <div class="form-group">
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          v-model="user.name"
        />
        <Label for="name">Name</Label>
      </div>
      <div class="form-group">
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="kingsleyomin@enyata.com"
          v-model="user.email"
        />
        <Label for="email">Email address</Label>
      </div>
      <div class="form-group">
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="***************"
          v-model="user.password"
        />
        <Label for="password">Password</Label>
      </div>
      <div class="submit-btn">
        <Button type="submit" :disabled="!isValid">Sign up</Button>
      </div>
      <p>Account already exists?</p>
    </form>
    <!-- validation error message -->
    <template v-if="error">
      <ErrorMessage>{{ errorMessages[0] }}</ErrorMessage>
    </template>
    <!-- footer -->
    <div class="footer">
      <a>Privacy Policy</a> <span>and</span> <a>Terms of services</a>
    </div>
  </div>
</template>
<script>
import Label from "@/components/atoms/Label";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import ErrorMessage from "@/components/atoms/ErrorMessage";
import { validateUserLogin } from "@/shared/utility";

export default {
  components: {
    Label,
    Input,
    Button,
    ErrorMessage,
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      error: null,
      isValid: null,
    };
  },
  computed: {
    errorMessages() {
      return Object.values(this.error);
    },
  },
  watch: {
    user: {
      handler(value) {
        const { error, isValid } = validateUserLogin(value);
        this.error = error;
        this.isValid = isValid;
      },
      deep: true,
    },
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.$router.push("/overview");
    },
  },
};
</script>
<style>

</style>
