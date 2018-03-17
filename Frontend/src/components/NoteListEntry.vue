<template>
    <div class="note-list-entry">
        <button v-on:click="removeNote()" class="button">X</button>
        <p style="font-weight: bold;">{{ title }}</p>
        <p>{{ content }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'note-list-entry',
  props: ['title', 'content', 'id', 'reloadCallback'],
  methods: {
    removeNote() {
      axios.delete('http://localhost:3000/note', {
        data: { id: this.id },
      }).then((response) => {
        if (response.status === 200) {
          this.reloadCallback();
        }
      });
    },
  },
};
</script>

<style scoped>
.note-list-entry {
    border: 3px #2980b9 solid;
    border-radius: 2px;

    background-color: #2980b9;
    color: #ecf0f1;

    font-size: 18px;

    padding: 8px;
    margin-bottom: 5px;
}

.note-list-entry:hover {
    background-color: #3498db;
}

button.button, p {
    width: 30px;
    height: 30px;

    display: inline-block;
}

p {
    width: 90%;
    word-break: break-all;
}
</style>
