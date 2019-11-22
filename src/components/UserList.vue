<template>
  <div id="user-list">
    <h4>Members</h4>
    <q-list bordered separator>
      <q-item v-for="user in users" :key="user.name" clickable>
        <q-item-section>
          <span>{{ user.username }}</span>
          <q-chip v-if="user.presence === 'online'" color="teal" text-color="white" dense>online</q-chip>
          <q-chip v-else color="orange" text-color="white" dense>offline</q-chip>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { mapState } from 'vuex';

@Component({
  name: 'user-list',
  computed: { ...mapState('chatModule', ['users']) }
})
export default class UserList extends Vue {
  
}
</script>

<style lang="scss" scoped>
.q-list {
  text-align: left;
}

.q-item__section {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>
