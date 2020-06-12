<template>
  <div>
    <!-- v-for는 키값이 필요하다, v-bind로 키값 연결해줌 -->
    <span v-for="dogImage in dogImages" :key="dogImage.id">
      <img width="300" height="300" :src="dogImage.url" />
    </span>
  </div>
</template>

<script>
export default {
  name: "DogImage",
  props: {
    dogImages: Array,
  },
};
</script>

<style scoped></style>
