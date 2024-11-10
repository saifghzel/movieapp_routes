import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Coeur = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      onClick={() => {
        handleClick();
      }}
    >
      <FontAwesomeIcon
        icon={faHeart}
        style={{ color: clicked ? "red" : "gray", cursor: "pointer" }}
      />
    </div>
  );
};

export default Coeur;
