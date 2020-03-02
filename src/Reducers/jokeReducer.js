import { FETCH_JOKE, REFRESH_JOKE } from "../Actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_JOKE:
      return {
        ...state,
        item: action.payload
      };
    // case REFRESH_JOKE:
    default:
      return state;
  }
}

// const jokesReducer = (state = false, action) => {
//   switch (action.type) {
//     case "UPDATEJOKE":
//       return true;
//     default:
//       return state;
//   }
// };

// export default jokesReducer;
