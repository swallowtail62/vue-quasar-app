<template>
  <q-toolbar class="bg-secondary text-white shadow-2">
    <q-btn flat dense round icon="menu" />
    <q-space />
    <span>{{ user.name }} | </span>
    <q-btn flat label="Logout" />
  </q-toolbar>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { mapState } from 'vuex';

@Component({
  name: 'chat-nav-bar',
  computed: { ...mapState(['user'])}
})
export default class ChatNavBar extends Vue{
  
}
</script>
