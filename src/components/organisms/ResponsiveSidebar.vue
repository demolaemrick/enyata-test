<template>
  <div
    class="mobile-sidebar"
    :class="{
      show: $store.state.showSideMenu,
    }"
  >
    <div class="logo-container">
      <img alt="Star wars logo" src="../../assets/avatar.png" />
    </div>
    <p class="user">John Doe</p>
    <div class="hamburger">
      <Hamburger color="white" />
    </div>
    <SidebarItems />
  </div>
</template>
<script>
import SidebarItems from "@/components/molecules/SidebarItems";
import Hamburger from "@/components/atoms/Hamburger";

export default {
  components: { SidebarItems, Hamburger },
};
</script>
<style scoped>
.mobile-sidebar {
  position: fixed;
  width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background: #031434;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  transition: transform 0.3s ease-out;
  transform: translateX(-100%);
}

.logo-container {
  width: 6.7rem;
  height: 5.875rem;
}
.logo-container img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.user {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
}

.hamburger {
  position: absolute;
  top: 5px;
  right: 5px;
}

@media (min-width: 993px) {
  .mobile-sidebar {
    display: none;
  }
}

.show {
  transform: translateX(0);
}
</style>
