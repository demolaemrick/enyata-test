<template>
  <div
    class="container"
    :class="{ change: $store.state.showSideMenu }"
    @click="rotateHamburger"
  >
    <div class="bar1" :style="styleObject"></div>
    <div class="bar2" :style="styleObject"></div>
    <div class="bar3" :style="styleObject"></div>
  </div>
</template>
<script>
export default {
  props: ["color"],
  data() {
    return {
      styleObject: {
        background: this.color,
      },
    };
  },
  methods: {
    rotateHamburger() {
      this.$store.commit("toggleSideMenu");
    },
  },
};
</script>
<style>
.container {
  display: inline-block;
  cursor: pointer;
}

.bar1,
.bar2,
.bar3 {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {
  opacity: 0;
}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
</style>
