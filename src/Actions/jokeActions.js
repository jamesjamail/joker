import { FETCH_JOKE, REFRESH_JOKE } from "./types";

export const fetchJoke = () => dispatch => {
  fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "application/json"
    }
  })
    .then(res => res.json())
    .then(joke =>
      dispatch({
        type: FETCH_JOKE,
        payload: joke
      })
    )
    .catch(err => {
      console.log(err);
    });
};
