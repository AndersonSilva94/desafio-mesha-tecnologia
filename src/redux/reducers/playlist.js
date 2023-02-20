import { SET_PLAYLIST, SET_PLAYLIST_LOADING } from "../actions";

const INITIAL_STATE = {
  playlist: {},
  loadingPlaylist: false
};

const playlist = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PLAYLIST_LOADING:
      return { ...state, loadingPlaylist: true };
    case SET_PLAYLIST:
      return { ...state, playlist: { ...action.payload }, loadingPlaylist: false };
    default:
      return state;
  }
};

export default playlist;
