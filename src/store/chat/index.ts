import { ChatState } from './types';
import { Module } from 'vuex';
import { RootState } from '../types';
import mutations from './mutations';
import actions from './actions';

const state: ChatState = {
  loading: false,
  sending: false,
  error: null,
  user: {
    username: 'Jack',
    name: 'Jack Sparrow'
  },
  reconnect: false,
  activeRoom: { id: '124' },
  rooms: [
    {
      id: '123',
      name: 'Ships'
    },
    {
      id: '124',
      name: 'Treasure'
    }
  ],
  users: [
    {
      username: 'Jack',
      name: 'Jack Sparrow',
      presence: 'online'
    },
    {
      username: 'Barbossa',
      name: 'Hector Barbossa',
      presence: 'offline'
    }
  ],
  messages: [
    {
      username: 'Jack',
      date: '11/12/2019',
      text: 'Not all treasure is silver and gold mate'
    },
    {
      username: 'Jack',
      date: '12/12/2019',
      text: 'If you were waiting for the opportune moment, that was it'
    },
    {
      username: 'Hector',
      date: '12/12/2019',
      text: 'You know Jack, I thought I had you figured out'
    }
  ],
  userTyping: null
};

export const chatModule: Module<ChatState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters: {
    hasError: (state: ChatState) => (state.error ? true : false)
  }
};
