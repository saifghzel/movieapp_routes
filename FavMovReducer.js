import { CREATELIBRARY, DISLIKEMOVIE, LIKEMOVIE } from "./actionType";

const initialFav = {
  favMovies: [],
};

export const FavMovReducer = (state = initialFav, { type, payload }) => {
  switch (type) {
    case CREATELIBRARY:
      return {
        ...state,
        favMovies: [
          ...state.favMovies,
          { id: payload.id, username: payload.username, likedMovies: [] },
        ],
      };

    case LIKEMOVIE:
      return {
        ...state,
        favMovies: state.favMovies.map((user) =>
          user.id === payload.payloaduser.id
            ? {
                ...user,
                likedMovies: [...user.likedMovies, payload.payloadMovie],
              }
            : user
        ),
      };

    case DISLIKEMOVIE:
      return {
        ...state,
        favMovies: state.favMovies.map((user) =>
          user.id === payload.userID
            ? {
                ...user,
                likedMovies: user.likedMovies.filter(
                  (movie) => movie.id !== payload.movieID
                ),
              }
            : user
        ),
      };

    default:
      return state;
  }
};
