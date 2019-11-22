<template>
  <div class="login-form">
    <q-form @submit="onSubmit">
      <q-banner v-show="hasError" dense class="text-white bg-red">
        {{ error }}
      </q-banner>
      <q-input v-model="userId" filled label="Enter Your User Name" hint="Name and surname" />
      <div>
        <q-btn label="submit" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import s from 'underscore.string';
import User from '../model/interface';

@Component({
  name: 'login-form',
  computed: { 
    ...mapState('chatModule', ['loading', 'error', 'user']),
    ...mapGetters('chatModule', ['hasError'])
  },
  methods: { 
    ...mapActions('chatModule', ['login']),
    ...mapMutations('chatModule', ['setError'])
  }
})
export default class LoginForm extends Vue {
  private userId = '';
  private user!: User;
  private hasError!: boolean;
  
  private validate(str: string): boolean {
    if (s.isBlank(str)) {
      this.setError('Empty ID is forbidden');
      return false;
    }
    return true;
  }
  private setError!: (err: string) => void;
  private login!: (userId: string) => Promise<void>;

  private async onSubmit(): Promise<void> {
    if (!this.validate(this.userId)) {
      return;
    }
    await this.login(this.userId);
    if (this.user && !this.hasError) {
      this.$router.push('chat');
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.q-banner {
  margin-bottom: 12px;
  border-radius: 3px;
}
</style>
