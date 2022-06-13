<template>
  <div class="movie">
    <div class="movie__image-container">
      <slot name="image"></slot>
    </div>
    <div class="movie__info">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<style>
.movie {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  padding: 0 28px;
}
.movie__image-container {
  width: 318px;
  height: 450px;
}
.movie__image-container img {
  width: 100%;
}

.movie__info h1 {
  color: #000000;
  font-weight: 700;
  font-size: 48px;
  margin-bottom: 1.75rem;
}
.movie__info p {
  color: #303b54;
  font-weight: 500;
  margin-bottom: 7px;
  text-transform: capitalize;
}

@media (max-width: 689px) {
  .movie__image-container{
    width: 100%;
    height: auto;
  }
}
</style>
