import React from "react";
import { Button, Card } from "react-bootstrap";

import { Link, useParams } from "react-router-dom";
import Star from "./Star";
import { useSelector } from "react-redux";

const Details = () => {
  const { films } = useSelector((state) => state.movieReducer);
  const params = useParams();
  const chosenfilm = films.find((el) => el.id === Number(params.id));

  const autrefilms = films.filter((el) => el.id !== chosenfilm.id);

  return (
    <div style={{ margin: "80px" }}>
      <h1>{chosenfilm.name}</h1>
      <p>{chosenfilm.categorie}</p>

      <iframe
        src={chosenfilm.trailer}
        title={chosenfilm.name}
        width="560"
        height="315"
      ></iframe>

      <div style={{ margin: "80px" }}>
        <h2>Check more films</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {autrefilms.map((el) => (
            <Card
              key={el.id}
              style={{ width: "18rem", height: "360px", margin: "5px" }}
            >
              <Card.Img
                variant="top"
                src={el.image}
                style={{
                  height: "175px",
                  width: "100%",
                  backgroundColor: "black",
                }}
              />
              <Card.Title>{el.name}</Card.Title>
              <Card.Body>
                <Card.Text>
                  Rate : <Star rating={el.rating} />
                </Card.Text>
                <Link to={`/films/${el.id}`}>
                  <Button variant="danger">Check Details</Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
