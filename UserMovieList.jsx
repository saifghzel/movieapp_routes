import React from "react";
import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";
import UserMovieCard from "./UserMovieCard";

const UserMovieList = ({ searchText, category }) => {
  const { films } = useSelector((state) => state.movieReducer);
  const { LoggedUser, isAuth } = useSelector((state) => state.userReducer);
  return (
    <div>
      {!isAuth && LoggedUser !== "User" ? (
        <Navigate to={"/login"} />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            margin: "10px",
            paddingTop: "150px",
          }}
        >
          {category === "all"
            ? films
                .filter((el) =>
                  el.name
                    .toUpperCase()
                    .includes(searchText.toUpperCase().trim())
                )
                .map((el) => <UserMovieCard el={el} />)
            : films
                .filter(
                  (el) =>
                    el.name
                      .toUpperCase()
                      .includes(searchText.toUpperCase().trim()) &&
                    el.categorie === category
                )
                .map((el) => <UserMovieCard el={el} />)}
        </div>
      )}
    </div>
  );
};

export default UserMovieList;
