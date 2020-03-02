import { REFRESH_JOKE } from "../Constants/action-types";
import { combineReducers } from "redux";
import jokeReducer from "./jokeReducer";

export default combineReducers({
  joke: jokeReducer
});

// const initialState = {
//   jokes: [{ id: 99, joke: "defaultJoke" }]
// };

// function rootReducer(state = initialState, action) {
//   if (action.type === REFRESH_JOKE) {
//     let newJoke;

//     fetch("https://icanhazdadjoke.com/", {
//       method: "GET",
//       mode: "cors",
//       headers: {
//         Accept: "application/json"
//       }
//     })
//       .then(res => res.json())
//       .then(data => {
//         newJoke = data;
//       })
//       .catch(err => {
//         console.log(err);
//       });
//     return { jokes: newJoke };
//     // return Object.assign({}, state, {
//     //   jokes: state.jokes.concat(action.payload)
//     // });
//   }
//   return state;
// }
