<template>
  <div class="login-form">
    <q-form @submit="onSubmit">
      <q-input v-model="userName" filled label="Enter Your User Name" hint="Name and surname" />
      <div>
        <q-btn label="submit" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { mapState, mapGetters } from 'vuex';

@Component({
  name: 'login-form',
  computed: { ...mapState(['loading', 'error']), ...mapGetters(['hasError']) }
})
export default class LoginForm extends Vue {
  private userName = '';
  
  private onSubmit(): void {
    //
  }

  private onReset(): void {
    this.userName = '';
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
</style>
