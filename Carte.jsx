import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Delete_film } from "../redux/action";
import { Link } from "react-router-dom";
import Star from "./Star";

const Carte = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <div className="mcard">
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
            <Button
              style={{ margin: "5px" }}
              variant="danger"
              onClick={() => dispatch(Delete_film(el.id))}
            >
              DELETE
            </Button>
            <Link to={`/films/${el.id}`}>
              <Button variant="outline-success">Check Details</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Carte;
