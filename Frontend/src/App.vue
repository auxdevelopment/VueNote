<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import NoteList from './components/NoteList';

export default {
  name: 'App',
  components: {
    NoteList,
  },
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;

  background-color: #ecf0f1;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

header {
  width: 100%;
  height: 80px;

  background-color: #34495e;
  color: #ecf0f1;

  text-align: center;
  font-size: 24px;

  margin-bottom: 50px;

  padding-top: 20px;
}

.content-container {
  border: 2px solid #34495e;
  border-radius: 4px;

  background-color: #34495e;

  padding: 10px;
  margin: 10px;
}

.button {
  width: 100%;
  height: 50px;

  margin-bottom: 10px;

  background-color: #7f8c8d;
  border: none;

  color: white;

  font-size: 18px;
}

button:hover {
  background-color: #95a5a6;
}
</style>
