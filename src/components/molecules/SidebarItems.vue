<template>
  <ul class="sidebar__items">
    <SidebarItem title="Overview" path="/overview">
      <template #icon>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H7.2V7.2H0V0ZM0 10.8H7.2V18H0V10.8ZM10.8 0H18V7.2H10.8V0ZM10.8 10.8H18V18H10.8V10.8Z"
            fill="white"
          />
        </svg>
      </template>
    </SidebarItem>
    <SidebarItem title="Starships" path="/starships">
      <template #icon>
        <div class="square"></div>
      </template>
    </SidebarItem>
    <SidebarItem title="People" path="/people">
      <template #icon>
        <div class="square"></div>
      </template>
    </SidebarItem>
    <SidebarItem title="Species" path="/species">
      <template #icon>
        <div class="square"></div>
      </template>
    </SidebarItem>
  </ul>
</template>
<script>
import SidebarItem from "@/components/atoms/SidebarItem";
export default {
  components: {
    SidebarItem,
  },
};
</script>
<style>
.sidebar__items {
  padding: 0;
  width: 80%;
}


.sidebar__items .square {
  background: #a9c1ff;
  width: 1rem;
  height: 1rem;
  border-radius: 5px;
}
</style>
