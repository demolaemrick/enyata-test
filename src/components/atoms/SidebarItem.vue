<template>
  <router-link
    class="sidebar__item"
    :class="{ active: isActive }"
    :to="path"
  >
    <slot name="icon"></slot>
    <span>{{ title }}</span>
  </router-link>
</template>
<script>
export default {
  props: ["title", "path"],
  data() {
    return {
      isActive: `/${this.$route.path.split("/")[1]}` === this.path,
    };
  },
};
</script>
<style>
.sidebar__item {
  display: flex;
  align-items: center;
  gap: 20px;
  text-decoration: none;
  color: #ffffff;
  font-weight: 600;
  padding: 15px 27px;
  border-radius: 4px;
  margin-bottom: 6px;
}
.sidebar__item:first-child {
  margin-bottom: 4.375rem;
}

.sidebar__item.router-link-active, .active {
  background: #0a74dc;
}

</style>
