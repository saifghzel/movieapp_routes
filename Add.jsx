import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add_film } from "../redux/action";
import { Navigate } from "react-router-dom";

const Add = () => {
  const dispatch = useDispatch();

  // Récupérer l'utilisateur authentifié et son rôle
  const { isAuth, LoggedUser } = useSelector((state) => state.userReducer);

  const [nouvfilm, setNouvfilm] = useState({
    newimg: "",
    newname: "",
    newdate: "",
    newrating: "",
    newcategory: "",
    show: false,
  });

  const handleShow = () => {
    setNouvfilm((prevState) => ({ ...prevState, show: !prevState.show }));
  };

  const handleClose = () => {
    setNouvfilm((prevState) => ({ ...prevState, show: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { newimg, newname, newdate, newrating, newcategory } = nouvfilm;
    const newfilm = {
      id: Math.random(),
      name: newname,
      date: newdate,
      image: newimg,
      rating: newrating,
      category: newcategory,
    };

    if (newname.trim() && newimg.trim() && newdate.trim()) {
      dispatch(Add_film(newfilm));
      handleClose();
    } else {
      alert("Error: Please fill out all fields.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {isAuth && LoggedUser.role === "admin" ? (
        <>
          <button onClick={handleShow}>
            {nouvfilm.show ? "Hide" : "Add a film"}
          </button>
          {nouvfilm.show && (
            <div>
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <label>Name:</label>
                <input
                  type="text"
                  value={nouvfilm.newname}
                  onChange={(e) =>
                    setNouvfilm({ ...nouvfilm, newname: e.target.value })
                  }
                />
                <label>Image URL:</label>
                <input
                  type="text"
                  value={nouvfilm.newimg}
                  onChange={(e) =>
                    setNouvfilm({ ...nouvfilm, newimg: e.target.value })
                  }
                />
                <label>Date:</label>
                <input
                  type="text"
                  value={nouvfilm.newdate}
                  onChange={(e) =>
                    setNouvfilm({ ...nouvfilm, newdate: e.target.value })
                  }
                />
                <label>Rating:</label>
                <input
                  type="number"
                  value={nouvfilm.newrating}
                  onChange={(e) =>
                    setNouvfilm({ ...nouvfilm, newrating: e.target.value })
                  }
                />
                <label>Category:</label>
                <input
                  type="text"
                  value={nouvfilm.newcategory}
                  onChange={(e) =>
                    setNouvfilm({ ...nouvfilm, newcategory: e.target.value })
                  }
                />
                <button type="submit">Submit</button>
              </form>
              <button onClick={handleClose}>Close</button>
            </div>
          )}
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default Add;
