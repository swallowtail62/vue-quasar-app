import { MutationTree } from 'vuex';
import { ChatState, User, Room, Message } from './types';

const mutations: MutationTree<ChatState> = {
  setError: (state: ChatState, error: string) => {
    state.error = error;
  },
  setLoading: (state: ChatState, loading: boolean) => {
    state.loading = loading;
  },
  setUser: (state: ChatState, user: User) => {
    state.user = user;
  },
  setReconnect: (state: ChatState, reconnect: boolean) => {
    state.reconnect = reconnect;
  },
  setActiveRoom: (state: ChatState, room: Room) => {
    state.activeRoom = room;
  },
  setUserTyping: (state: ChatState, userTyping: null) => {
    state.userTyping = userTyping;
  },
  addMessage: (state: ChatState, message: Message) => {
    state.messages.push(message);
  },
  reset: (state: ChatState) => {
    state.error = null;
    state.users = [];
    state.messages = [];
    state.rooms = [];
    state.user = null;
  }
};

export default mutations;
