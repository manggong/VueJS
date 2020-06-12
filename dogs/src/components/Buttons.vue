<template>
  <div>
    <button @click="dogClicked">가져오라 댕댕이!!!</button>
    <button @click="catClicked">가져오라 냥냥이!!!</button>
  </div>
</template>

<script>
export default {
  name: "Buttons",
  methods: {
    dogClicked() {
      //this.$emit("전파될 이벤트의 이름")
      this.$emit("dogButtonClicked");
    },
    catClicked() {
      //this.$emit("전파될 이벤트의 이름")
      this.$emit("catButtonClicked");
    },
  },
};
</script>

<style></style>
