import axios from "axios";
export const auth = {
  state: {
    authentication: false,
    username: "",
    }, // initial state
    reducers: {
      // handle state changes with pure functions
      setUsername(state, username) {
        return {
          ...state,
          username,
        };
      },
      setAuthentication(state, authentication) {
        return {
          ...state,
            authentication,
          };
        },
      },
      effects: (dispatch) => ({
      login(loginReq){
        return axios.post('https://dummyjson.com/auth/login', loginReq)
      }
    }),
    selectors: (slice, createSelector) => ({
      selectAuth() {
        return slice(state => state.authentication);
      },
    }),
  };