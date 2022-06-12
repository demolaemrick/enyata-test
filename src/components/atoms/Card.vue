<template>
  <div class="card">
    <div class="card__content">
      <div class="card__content__info">
        <span>{{ title }}</span>
        <span>200</span>
        <p>20 More than than yesterday</p>
      </div>
      <div class="card__icon" :style="{ background: iconColor }"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "iconColor"],
};
</script>
<style>
.card {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 24px 15px 17px;
}
.card__content {
  display: flex;
  justify-content: space-between;
}
.card__content__info {
  display: flex;
  flex-direction: column;
  gap: 23px;
}
.card__content__info span {
  color: #303b54;
  font-weight: 700;
}
.card__content__info p {
  color: #00992b;
  font-size: 9px;
  line-height: 24px;
}
.card__icon {
  background: #a9c1ff;
  width: 1.69rem;
  height: 1.63rem;
  border-radius: 5px;
}
</style>
