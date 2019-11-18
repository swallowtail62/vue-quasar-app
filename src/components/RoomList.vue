<template>
  <div id="room-list">
    <h4>Channels</h4>
    <q-list bordered separator>
      <q-item v-for="room in rooms" :key="room.id" clickable>
        <q-item-section># {{ room.name }}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { mapState } from 'vuex';

@Component({
  name: 'room-list',
  computed: { ...mapState(['rooms', 'activeRoom']) }
})
export default class RoomList extends Vue {
  private mockItems = [{name: 'hoge'}, {name: 'fuga'}, {name: 'bel'}]
}
</script>

<style lang="scss" scoped>
.q-list {
  text-align: left;
}
</style>