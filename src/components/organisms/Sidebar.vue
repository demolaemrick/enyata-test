<template>
  <div class="sidebar">
    <div class="logo-container">
      <img alt="Star wars logo" src="../../assets/star-wars.png" />
    </div>
    <SidebarItems />
  </div>
  <ResponsiveSidebar />
</template>
<script>
import SidebarItems from "@/components/molecules/SidebarItems";
import ResponsiveSidebar from "@/components/organisms/ResponsiveSidebar";

export default {
  components: { SidebarItems, ResponsiveSidebar },
};
</script>
<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  background: #031434;
  height: 100vh;
  width: 272px;
  min-width: 272px;
  padding: 32px 0;
  position: sticky;
  top: 0;
  bottom: 0;
  transition: transform 0.3s ease-out;
}

.logo-container {
  width: 6.7rem;
  height: 2.875rem;
}
.logo-container img {
  width: 100%;
  height: 100%;
}

@media (max-width: 992px) {
  .sidebar {
    display: none;
  }
}
</style>
