<template>
  <div id="chat-dashboard">
    <chat-nav-bar />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import ChatNavBar from '@/components/ChatNavBar.vue'

@Component({
  name: 'chat-dashboard',
  components: { ChatNavBar }
})
export default class ChatDashboard extends Vue{
  
}
</script>
