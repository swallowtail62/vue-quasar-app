import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import mutations from './chat/mutations';
import actions from './chat/actions';
import { RootState } from './types';
import { chatModule } from './chat';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const state: RootState = {
  version: '1.0.0'
};

const store: StoreOptions<RootState> = {
  state,
  modules: { chatModule }
};

export default new Vuex.Store<RootState>(store);
