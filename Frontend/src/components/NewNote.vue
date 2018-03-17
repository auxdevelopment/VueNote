<template>
    <div>
        <header>New Note</header>
        <div class="content-container new-note">
            <input v-model.trim="title" type="text" placeholder="Title">
            <textarea v-model.trim="content" placeholder="Note"></textarea>
            <button class="button" v-on:click="submitClicked()">Submit</button>
            <button class="button" v-on:click="cancelClicked()">Cancel</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    submitClicked() {
      if (this.title !== '' && this.content !== '') {
        axios.post('http://localhost:3000/note', {
          title: this.title,
          content: this.content,
        }).then(() => {
          this.$router.push('/');
        });
      }
    },
    cancelClicked() {
      this.$router.push('/');
    },
  },
  data() {
    return {
      title: '',
      content: '',
    };
  },
};
</script>

<style scoped>
input, textarea {
    width: 100%;
    box-sizing: border-box;

    padding: 8px;
    margin-bottom: 5px;
}

textarea {
    min-height: 80px;
}

.new-note > form :last-child {
    margin-bottom: 0;
}
</style>
