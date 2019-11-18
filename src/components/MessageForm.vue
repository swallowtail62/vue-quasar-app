<template>
  <div id="message-form">
    <q-form />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { mapState, mapGetters } from 'vuex';

@Component({
  name: 'message-form',
  computed: {
    ...mapState(['user', 'sending', 'error', 'activeRoom']), 
    ...mapGetters(['hasError'])
   }
})
export default class MessageForm extends Vue {
  private message = '';

}
</script>
