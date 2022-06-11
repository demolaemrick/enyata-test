<template>
  <div class="sidebar">
    <div class="logo-container">
      <img alt="Star wars logo" src="../../assets/star-wars.png" />
    </div>
    <SidebarItems />
  </div>
</template>
<script>
import SidebarItems from "@/components/molecules/SidebarItems";

export default {
  components: { SidebarItems },
};
</script>
<style>
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  background: #031434;
  height: 100vh;
  width: 272px;
  padding: 32px 0;
  position: sticky;
  top: 0;
}

.logo-container {
  width: 107px;
  height: 46px;
}
.logo-container img {
  width: 100%;
  height: 100%;
}
</style>
