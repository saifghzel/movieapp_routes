import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CreateLibrary, registerAccount } from "../redux/action";
import { Link, Navigate } from "react-router-dom";

const LoginComp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");
  const dispatch = useDispatch();

  const { AllUsers, LoggedUser, isAuth } = useSelector(
    (state) => state.userReducer
  );

  const handleRegister = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      username: username,
      Email: email,
      userRole: role,
      PW: password,
    };

    const emailExists = AllUsers.some(
      (el) => el.Email?.toUpperCase() === email.toUpperCase()
    );

    if (emailExists) {
      alert("This email is already registered");
    } else {
      dispatch(registerAccount(newUser));
      dispatch(CreateLibrary(newUser));
      alert("registered successfully");
    }
  };

  return (
    <div>
      {isAuth && LoggedUser ? (
        <Navigate to="/films" />
      ) : (
        <div
          style={{
            marginTop: "80px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Form style={{ width: "50%" }} onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                pattern=".{6,}"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Text className="text-muted">
                Your password length should be at least 6 characters.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicRole">
              <Form.Label>Role:</Form.Label>
              <select
                name=""
                id=""
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Create Account
            </Button>
          </Form>

          <div className="separation"></div>

          <div>
            <h2>If you already have an account, click below</h2>
            <Link to="/login">
              <Button>Go to Login</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginComp;
