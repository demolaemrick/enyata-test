<template>
  <div class="layout">
    <RouterView name="Sidebar"></RouterView>
    <div class="main">
      <RouterView name="Navbar"></RouterView>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
}
.main {
  width: 100%;
}
</style>
