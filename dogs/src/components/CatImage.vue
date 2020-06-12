<template>
  <div>
    <!-- v-for는 키값이 필요하다, v-bind로 키값 연결해줌 -->
    <span v-for="catImage in catImages" :key="catImage.id">
      <img width="300" height="300" :src="catImage.url" />
    </span>
  </div>
</template>

<script>
export default {
  name: "CatImage",
  props: {
    catImages: Array,
  },
};
</script>

<style scoped></style>
