<template>
  <div>
    <header>VueNote</header>

    <div class="content-container note-list-container">
        <button id="addButton" class="button" v-on:click="addNote()">New Note</button>
        <note-list-entry v-for=" (note, index) in this.notes" :key="index"
                         v-bind:title="note.title"
                         v-bind:content="note.content"
                         v-bind:id="note.id"
                         v-bind:reloadCallback="loadNotes"
        >
        </note-list-entry>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import NoteListEntry from './NoteListEntry';

export default {
  name: 'note-list',
  data() {
    return {
      notes: [],
    };
  },
  created() {
    this.loadNotes();
  },
  components: {
    NoteListEntry,
  },
  methods: {
    loadNotes() {
      axios.get('http://localhost:3000/notes')
        .then((response) => {
          if (response.status === 200) {
            this.notes = response.data;
          }
        });
    },
    addNote() {
      this.$router.push('/newNote');
    },
  },
};
</script>

<style scoped>
/* overwrite default margin-bottom of NoteListEntry */
.note-list-container > :last-child {
  margin-bottom: 0;
}
</style>

