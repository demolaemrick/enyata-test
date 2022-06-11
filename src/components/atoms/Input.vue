<template>
  <input
    class="input"
    :type="type"
    :id="id"
    :name="email"
    :placeholder="placeholder"
    autocomplete="off"
  />
</template>
<script>
export default {
  props: ["type", "placeholder", "id", "name"],
};
</script>
<style>
.input {
  width: 100%;
  border: 1px solid #a4a7b7;
  border-radius: 4px;
  color: #0b2253;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  outline: none;
  padding: 16px;
  position: absolute;
  top: 0px;
  left: 0px;
}
.input:focus {
  border-color: #0a74dc;
}
.input::placeholder {
  font-size: 14px;
  color: #0b2253;
}
</style>
