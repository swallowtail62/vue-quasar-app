<template>
  <div id="chat-dashboard">
    <chat-nav-bar />
    <div class="chat-dashboard-container">
      <div class="left-side-bar partial-col">
        <room-list />
      </div>
      <div class="main-content partial-col">
        <div id="chat-content">
          <message-list />
        </div>
      </div>
      <div class="right-side-bar partial-col">
        <user-list />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import ChatNavBar from '@/components/ChatNavBar.vue'
import RoomList from '@/components/RoomList.vue'
import MessageList from '@/components/MessageList.vue'
import UserList from '@/components/UserList.vue'

@Component({
  name: 'chat-dashboard',
  components: { ChatNavBar, RoomList, MessageList, UserList }
})
export default class ChatDashboard extends Vue{
  
}
</script>

<style lang="scss" scoped>
.chat-dashboard-container {
  display: flex;
}

.partial-col {
  padding: 0 8px;
}

.left-side-bar {
  flex-basis: 20%;
}

.main-content {
  flex-basis: 60%;
}

.right-side-bar {
  flex-basis: 20%;
}
</style>