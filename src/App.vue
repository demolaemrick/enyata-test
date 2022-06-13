<template>
  <div class="layout">
    <RouterView name="Sidebar" :key="$route.params"></RouterView>
    <div class="main">
      <RouterView name="Navbar" :key="$route.params"></RouterView>
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
  overflow: hidden;
}
</style>
