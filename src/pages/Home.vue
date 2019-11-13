<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import Component from 'vue-class-component';
import Vue from 'vue';

@Component({
  name: 'home',
  components: { HelloWorld }
})
export default class Home extends Vue {
  fruit = 'apple';
}
</script>
