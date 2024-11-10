import React from "react";
import Star from "./Star";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { dislikeMovie, likeMovie } from "../redux/action";

const UserMovieCard = ({ el }) => {
  const { LoggedUser } = useSelector((state) => state.userReducer);
  const { favMovies } = useSelector((state) => state.FavMovReducer);
  const dispatch = useDispatch();
  const Library = favMovies.find((el) => el.id === LoggedUser.id);

  const handleLikeDislike = (LoggedUser, film) => {
    Library.likedMovies.find((el) => el.id === film.id)
      ? dispatch(dislikeMovie(LoggedUser, film))
      : dispatch(likeMovie(LoggedUser, film));
  };
  return (
    <div>
      <Card style={{ width: "18rem", height: "470px", margin: "5px" }}>
        <Card.Img
          variant="top"
          src={el.image}
          style={{ height: "175px", width: "100%", backgroundColor: "black" }}
        />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>Date de sortie : {el.date}</Card.Text>
          <Card.Text>
            Rate : <Star rating={el.rating} />
          </Card.Text>

          <Card.Text>Categorie : {el.categorie}</Card.Text>
          <div className="bu">
            <Link to={`/films/${el.id}`}>
              <Button variant="outline-success">Check Details</Button>
            </Link>

            <Button onClick={() => handleLikeDislike(LoggedUser, el)}>
              LIKE
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserMovieCard;
