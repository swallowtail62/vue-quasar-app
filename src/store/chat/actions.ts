import chatkit from '@/../chatkit';
import { ActionTree, Commit } from 'vuex';
import { ChatState } from './types';
import { RootState } from '../types';

// Helper function for displaying error messages
function handleError(commit: Commit, error: any): void {
  const message = error.message || error.info.error_description;
  commit('setError', message);
}

const actions: ActionTree<ChatState, RootState> = {
  login: async ({ commit }, userId: string) => {
    try {
      commit('setError', '');
      commit('setLoading', true);
      // Connect user to ChatKit service
      const currentUser = await chatkit.connectUser(userId);
      commit('setUser', {
        username: currentUser.id,
        name: currentUser.name
      });
      commit('setReconnect', false);
    } catch (error) {
      handleError(commit, error);
    } finally {
      commit('setLoading', false);
    }
  }
};

export default actions;
