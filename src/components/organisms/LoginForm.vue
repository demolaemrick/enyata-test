<template>
  <div class="login-form-container">
    <h1 class="heading-text">Login</h1>
    <p>Kindly enter your details to log in</p>
    <!-- form -->
    <form class="form">
      <div class="form-group">
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="kingsleyomin@enyata.com"
        />
        <Label for="email">Email address</Label>
      </div>
      <div class="form-group">
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="***************"
        />
        <Label for="password">Password</Label>
      </div>
      <div class="submit-btn">
        <Button />
      </div>
      <p>Forgot your password?</p>
    </form>
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
export default {
  components: {
    Label,
    Input,
    Button,
  },
};
</script>
<style>
.login-form-container {
  position: relative;
  background: #ffffff;
  border: 1px solid rgba(164, 167, 183, 0.3);
  border-radius: 8px;
  padding: 36px 66px;
}

.heading-text {
  color: #434854;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 8px;
}

.heading-text + p {
  color: #737373;
}

.form {
  width: 20.9rem;
  margin-top: 62px;
}

.form-group {
  position: relative;
  margin-bottom: 32px;
  height: 48px;
}
.input:focus ~ .label,
.input:not(:placeholder-shown).input:not(:focus) ~ .label {
  top: -0.5rem;
  font-size: 0.8rem;
  left: 0.8rem;
}

.submit-btn {
  margin-bottom: 24px;
}

.form > p {
  text-align: center;
  color: #0a74dc;
  font-size: 14px;
  cursor: pointer;
}
.footer {
  font-size: 12px;
  color: #303b54;
  text-align: center;
  margin-top: 6rem;
}
.footer a {
  text-decoration: underline;
  cursor: pointer;
}
.footer span {
  color: #b0b9c8;
}
</style>
