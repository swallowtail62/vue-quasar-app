export interface User {
  username: string;
  name: string;
  presence?: string; // TODO: replace type with bool
}

export interface Room {
  id: string;
  name?: string;
}

export interface Message {
  username: string;
  date: string;
  text: string;
}

// From here down is Vuex State type...

export interface ChatState {
  loading: boolean;
  sending: false;
  error: string | null;
  user: User | null;
  reconnect: boolean;
  activeRoom: Room;
  rooms: Room[];
  users: User[];
  messages: Message[];
  userTyping: null;
}
