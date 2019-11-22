<template>
  <div id="message-list">
    <h4>Messages</h4>
    <div v-chat-scroll="{ smooth: true }">
      <div v-for="(message, index) in messages" :key="index">
        <q-chat-message
          :name="getSenderName(message.username)"
          :text="[message.text]"
          :sent="user.username === message.username"
          :stamp="message.date"
          :class="[ user.username === message.username ? 'sent' : 'received' ]"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { mapState } from 'vuex';
import User from '@/model/interface';

@Component({
  name: 'message-list',
  computed: { ...mapState('chatModule', ['messages', 'user']) }
})
export default class MessageList extends Vue {
  private user!: User;

  private getSenderName(name: string): string {
    return this.user.username === name ? 'me' : name;
  }
}
</script>

<style lang="scss" scoped>
.sent {
  text-align: right;
}

.received {
  text-align: left;
}
</style>
