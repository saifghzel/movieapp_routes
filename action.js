import {
  ADD_FILM,
  CREATELIBRARY,
  DELETE_FILM,
  DISLIKEMOVIE,
  EDIT_FILM,
  LIKEMOVIE,
  LOGIN,
  LOGOUT,
  REGISTER,
} from "./actionType";

export const Add_film = (newfilm) => {
  return {
    type: ADD_FILM,
    payload: newfilm,
  };
};

export const Delete_film = (filmId) => {
  return {
    type: DELETE_FILM,
    payload: filmId,
  };
};

export const Edit_film = (updatedFilm) => {
  return {
    type: EDIT_FILM,
    payload: updatedFilm,
  };
};

export const registerAccount = (newUser) => {
  return {
    type: REGISTER,
    payload: newUser,
  };
};

export const loginUser = (loggedUser) => {
  return {
    type: LOGIN,
    payload: loggedUser,
  };
};
export const LogoutUser = () => {
  return {
    type: LOGOUT,
  };
};
export const CreateLibrary = (user) => {
  return {
    type: CREATELIBRARY,
    payload: user,
  };
};
export const likeMovie = (LoggedUser, film) => {
  return {
    type: LIKEMOVIE,
    payload: { payloaduser: LoggedUser, payloadMovie: film },
  };
};
export const dislikeMovie = (LoggedUser, film) => {
  return {
    type: DISLIKEMOVIE,
    payload: {
      userID: LoggedUser.id,
      movieID: film.id,
    },
  };
};
