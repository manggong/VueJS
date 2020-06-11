<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="나는 김지환이다!!!" />
    <TodoList :todos="todos" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    TodoList
  },
  data() {
    return {
      todos: [
        { id: 1, content: "Vue Vue Vue", isCompleted: false },
        { id: 2, content: "잠자기", isCompleted: false },
        { id: 3, content: "밥먹기", isCompleted: false },
        { id: 4, content: "계속자기", isCompleted: false }
      ]
    };
  }
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
