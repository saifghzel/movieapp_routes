import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Star = ({ rating }) => {
  const totalStars = 5;

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          style={{ color: index < rating ? "gold" : "gray" }}
        />
      ))}
    </div>
  );
};

export default Star;
