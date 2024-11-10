import React, { useState } from "react";
import { Badge, Button, Offcanvas } from "react-bootstrap";
import { useSelector } from "react-redux";
import UserMovieCard from "./UserMovieCard";

const LikedMovie = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { LoggedUser } = useSelector((state) => state.userReducer);
  const { favMovies } = useSelector((state) => state.FavMovReducer);
  const LoggedUserFavouriteMovies = favMovies.find(
    (el) => el.id === LoggedUser.id
  );

  return (
    <div>
      {" "}
      <Button variant="danger" onClick={handleShow}>
        Favourite Movies
        <Badge pill bg="danger">
          {LoggedUserFavouriteMovies.likedMovies.length}
        </Badge>
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{ width: "700px" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {LoggedUser.username}'s Favourite Movies
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {LoggedUserFavouriteMovies.likedMovies.map((el) => (
            <UserMovieCard el={el} key={el.id} />
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default LikedMovie;
