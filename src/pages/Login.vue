<template>
  <div id="login">
    <div class="login-info">
      <h3>Vue.ts with quasr Chat App</h3>
      <div>Powered by Chatkit SDK and quasar framework.</div>
      <div>More info about each framework/library</div>
      <div class="button-area">
        <q-btn type="a" href="https://jp.vuejs.org/index.html" color="secondary" label="Vue js" />
        <q-btn type="a" href="https://quasar.dev/" color="primary" label="quasar" />
        <q-btn type="a" href="https://pusher.com/chatkit" color="purple" label="Chat kit" />
      </div>
    </div>
    <h4>Chat Login</h4>
    <login-form />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import LoginForm from '@/components/LoginForm.vue'

@Component({
  name: 'login',
  components: { LoginForm }
})
export default class Login extends Vue{

}
</script>

<style lang="scss" scoped>
.login-info {
  padding: 40px;
  background-color: $color-theme-key;
}

.button-area {
  padding-top: 20px;
  .q-btn {
    margin: 0 8px;
  }
}
</style>
