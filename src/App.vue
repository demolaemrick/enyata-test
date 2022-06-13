<template>
  <div class="layout">
    <RouterView name="Sidebar" :key="$route.params.id"></RouterView>
    <div class="main">
      <RouterView name="Navbar" :key="$route.params.id"></RouterView>
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
