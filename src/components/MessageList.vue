<template>
  <div id="message-list">
    <h4>Messages</h4>
    <div v-chat-scroll="{ smooth: true }">
      <div v-for="(message, index) in messages" :key="index">
        <h5>{{ message.title }}</h5>
        <p>{{ message.text }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { mapState } from 'vuex';

@Component({
  name: 'message-list',
  computed: { ...mapState(['messages']) }
})
export default class MessageList extends Vue {
  
}
</script>
