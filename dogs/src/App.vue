<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>댕댕이 & 고냥이</h1>
    <Buttons @dogButtonClicked="getDog" @catButtonClicked="getCat" />
    <DogImage :dogImages="dogImages" />
    <CatImage :catImages="catImages" />
  </div>
</template>

<script>
import axios from "axios";
import DogImage from "./components/DogImage.vue";
import CatImage from "./components/CatImage.vue";
import Buttons from "./components/Buttons.vue";

export default {
  name: "App",
  components: {
    DogImage,
    CatImage,
    Buttons,
  },
  data() {
    return {
      catImages: [],
      dogImages: [],
    };
  },
  methods: {
    getDog() {
      axios
        .get("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
          this.dogImages.push({ id: Date.now(), url: response.data.message });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCat() {
      axios
        .get("https://api.thecatapi.com/v1/images/search")
        .then((response) => {
          this.catImages.push({
            id: response.data[0].id,
            url: response.data[0].url,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
