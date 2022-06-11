<template>
  <label class="label" :for="id">
    <slot></slot>
  </label>
</template>
<script>
export default {
  props: ["id"],
};
</script>
<style>
.label {
  position: absolute;
  top: -8px;
  left: 7px;
  padding: 0 4px;
  background-color: #fff;
  color: #b0b9c8;
  font-size: 12px;
  font-weight: 500;
  transition: 0.1s;
  z-index: 10;
}
</style>
