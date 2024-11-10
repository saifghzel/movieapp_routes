import { LOGIN, LOGOUT, REGISTER } from "./actionType";

const initialUser = {
  AllUsers: [
    {
      id: 1234512345,
      username: "SIFON",
      email: "ghzelsaif898@gmail.com",
      password: "azerty",
      role: "User",
    },
    {
      id: 12345123456,
      username: "SAIF",
      email: "ghzelsaif2@gmail.com",
      password: "azerty",
      role: "admin",
    },
  ],
  LoggedUser: null,
  isAuth: false,
};
export const userReducer = (state = initialUser, { type, payload }) => {
  switch (type) {
    case REGISTER:
      return { ...state, AllUsers: [state.AllUsers, payload] };
    case LOGIN: {
      return {
        ...state,
        LoggedUser: payload,
        isAuth: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        LoggedUser: null,
        isAuth: false,
      };
    }

    default:
      return state;
  }
};
