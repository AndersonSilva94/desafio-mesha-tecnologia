import { SET_PLAYLIST, SET_PLAYLIST_LOADING } from "../actions";

const INITIAL_STATE = {
  playlist: {}
};

const playlist = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PLAYLIST_LOADING:
      return { ...state };
    case SET_PLAYLIST:
      return { ...state, playlist: { ...action.payload }};
    default:
      return state;
  }
};

export default playlist;
