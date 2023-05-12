import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button as BButton, Spinner } from "react-bootstrap";

import Button from "../components/button/Button";
import {
  deleteUserAction,
  getUsersThunk,
} from "../store/actions/users.actions";

const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.usersReducer.users);
  const isLoading = useSelector((state) => state.usersReducer.isLoading);

  const goToUserCreation = () => {
    navigate("/add-user");
  };

  const removeUserHandler = (id) => {
    dispatch(deleteUserAction(id));
  };

  const getUsers = () => {
    dispatch(getUsersThunk());
  };

  return (
    <div>
      <Button onClick={goToUserCreation}>Create new user</Button>
      <Button onClick={getUsers}>Get Users from API</Button>
      <h1>Users</h1>

      {users?.length ? (
        users?.map((el) => {
          return (
            <div
              key={el.id}
              className="mb-5 position-relative"
              style={{
                border: "1px solid red",
                width: "40%",
                margin: "0 auto",
              }}
            >
              <h2>{el.name}</h2>
              <h2>{el.lastName}</h2>
              <h2>{el.email}</h2>
              <img src={el.image} alt="" />

              <BButton
                variant="danger"
                style={{ right: 0, top: 0, position: "absolute" }}
                onClick={removeUserHandler.bind(null, el.id)}
              >
                Remove
              </BButton>
            </div>
          );
        })
      ) : (
        <h1>There is no users to be displayed on this page</h1>
      )}

      {isLoading ? (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Spinner style={{ width: 200, height: 200 }} />
        </div>
      ) : null}
    </div>
  );
};

export default Users;
