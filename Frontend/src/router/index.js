import Vue from 'vue';
import Router from 'vue-router';
import NewNote from '../components/NewNote';
import NoteList from '../components/NoteList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: NoteList,
    },
    {
      path: '/newNote',
      component: NewNote,
    },
  ],
});
