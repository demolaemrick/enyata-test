<template>
  <div class="error">
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style>
.error {
  font-size: 14px;
  color: rgb(95, 33, 32);
  text-align: center;
  margin: 10px 0;
  background: rgb(253, 237, 237);
  padding: 20px;
  border-radius: 4px;
}
</style>
