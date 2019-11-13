<template>
  <div id="chat-dashboard">
    <chat-nav-bar />
    <div class="chat-dashboard-container">
      <div class="left-side-bar">
        <room-list />
      </div>
      <div class="main-content" />
      <div class="right-side-bar" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import ChatNavBar from '@/components/ChatNavBar.vue'
import RoomList from '@/components/RoomList.vue'

@Component({
  name: 'chat-dashboard',
  components: { ChatNavBar, RoomList }
})
export default class ChatDashboard extends Vue{
  
}
</script>

<style lang="scss" scoped>
.chat-dashboard-container {
  display: flex;
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