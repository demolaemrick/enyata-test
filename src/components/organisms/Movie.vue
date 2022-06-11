<template>
  <div class="movie">
    <div class="movie__image-container">
      <img src="../../assets/sample.png" alt="star war movie" />
    </div>
    <div class="movie__info">
      <h1>Cover</h1>
      <p>Director: Kingsley Omin</p>
      <p>Producer: Kingsley Omin</p>
      <p>Release Date: January 24, 2022.</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.movie {
  display: flex;
  gap: 28px;
  padding: 0 28px;
}
.movie__image-container {
  width: 318px;
  height: 450px;
}
.movie__info {
}
.movie__info h1 {
  color: #000000;
  font-weight: 700;
  font-size: 48px;
  margin-bottom: 1.75rem;
}
.movie__info p {
  color: #303B54;
  font-weight: 500;
  margin-bottom: 5px;
}
</style>
