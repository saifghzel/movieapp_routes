import React from "react";
import { useSelector } from "react-redux";
import Carte from "./Carte";
import { Navigate } from "react-router-dom";

const MovieList = ({ searchText, category }) => {
  const { films } = useSelector((state) => state.reducer);
  const { LoggedUser, isAuth } = useSelector((state) => state.userReducer);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        margin: "10px",
        paddingTop: "150px",
      }}
    >
      {!isAuth && LoggedUser.role !== "admin" ? (
        <Navigate to={"/login"} />
      ) : category === "all" ? (
        films
          .filter((el) =>
            el.name.toUpperCase().includes(searchText.toUpperCase().trim())
          )
          .map((el) => <Carte el={el} key={el.id} />)
      ) : (
        films
          .filter(
            (el) =>
              el.name.toUpperCase().includes(searchText.toUpperCase().trim()) &&
              el.categorie === category
          )
          .map((el) => <Carte el={el} key={el.id} />)
      )}
    </div>
  );
};

export default MovieList;
