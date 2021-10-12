import { SET_PLAYLIST, SET_PLAYLIST_LOADING } from ".";
import { getApiShazam } from "../../services/getApiShazam";

export const setPlaylistLoading = () => ({
  type: SET_PLAYLIST_LOADING
});

export const setPlaylist = (payload) => ({
  type: SET_PLAYLIST,
  payload
});

export const setPlaylistThunk = (temp) => (dispatch) => {
  dispatch(setPlaylistLoading());
  getApiShazam(temp)
    .then((res) => dispatch(setPlaylist(res)))
};
