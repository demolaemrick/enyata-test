<template>
  <div class="icon" :style="{ background: iconColor }"></div>
</template>
<script>
export default {
  props: ["iconColor"],
};
</script>
<style scoped>
.icon {
  background: #a9c1ff;
  width: 1rem;
  height: 1rem;
  border-radius: 5px;
}
</style>
