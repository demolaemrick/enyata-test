<template>
  <button v-bind="$attrs" class="button">
  <slot></slot>
  </button>
</template>
<script>
export default {};
</script>
<style>
.button {
  background: #0a74dc;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-family: inherit;
  font-weight: 500;
  width: 100%;
  padding: 12px 0;
}
.button:disabled {
  cursor:not-allowed;
}
</style>
