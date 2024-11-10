import { Route, Routes } from "react-router-dom";
import "./App.css";
import Entete from "./compo/Entete";
import MovieList from "./compo/MovieList";
import Add from "./compo/Add";
import Details from "./compo/Details";
import { useState } from "react";
import UserMovieList from "./compo/UserMovieList";
import LoginComp from "./compo/LoginComp";
import LogginOfficial from "./compo/LogginOfficial";
import { useSelector } from "react-redux";

function App() {
  const [category, setCategory] = useState("all");
  const handleCategory = (text) => {
    setCategory(text);
  };
  const [searchText, setSearchText] = useState("");
  const handleSearchChange = (text) => {
    setSearchText(text);
  };
  const { LoggedUser, isAuth } = useSelector((state) => state.userReducer);
  return (
    <div className="App">
      <Entete
        category={category}
        handleCategory={handleCategory}
        searchText={searchText}
        handleSearchChange={handleSearchChange}
      />
      <Routes>
        <Route path="/" element={<LoginComp />} />
        <Route
          path="/films"
          element={
            <div>
              {isAuth && LoggedUser.role === "admin" ? (
                <MovieList searchText={searchText} category={category} />
              ) : (
                <UserMovieList searchText={searchText} category={category} />
              )}
            </div>
          }
        />

        <Route
          path="/addmovie"
          element={
            <div style={{ margin: "100px" }}>
              <h1>PLEASE FILL ALL THE INFORMATIONS NEEDED</h1>
              <Add />
            </div>
          }
        />
        <Route path="/films/:id" element={<Details />} />
        <Route path="/login" element={<LogginOfficial />} />
      </Routes>
    </div>
  );
}

export default App;
