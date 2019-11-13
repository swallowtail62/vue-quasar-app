<template>
  <div id="room">
    <div class="room__header" />
    <div>{{ loading }}</div>
    <div>{{ error }}</div>
    <!-- <div v-html="hoge" /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapState } from 'vuex';

@Component({
  computed: mapState(['loading', 'error'])
})
export default class Room extends Vue {
  // private get hoge
}
</script>
