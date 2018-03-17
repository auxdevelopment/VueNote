<template>
    <div class="note-list-entry">
        <p>{{ title }}</p>
    </div>
</template>

<script>
export default {
  name: 'note-list-entry',
  props: ['title', 'content'],
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
</style>
