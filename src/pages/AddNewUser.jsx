import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

const AddNewUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();

  const goBack = () => {
    navigate(-1);
  };

  const resetData = () => {
    setName("");
    setLastName("");
    setEmail("");
    setImage("");
  };

  const onFormSubmit = () => {
    if (name?.trim() && lastName?.trim() && email?.trim()) {
      dispatch();

      resetData();
    } else {
      alert("you have required fields");
    }
  };

  return (
    <div>
      <Button onClick={goBack}>Back</Button>
      <h1>Add user</h1>

      <Form
        className="d-flex flex-column"
        style={{ maxWidth: 300, margin: "0 auto" }}
      >
        <input
          value={name}
          className="mb-4"
          placeholder="firstName"
          onChange={({ target: { value } }) => {
            setName(value);
          }}
        />
        <input
          value={lastName}
          className="mb-4"
          placeholder="lastName"
          onChange={({ target: { value } }) => {
            setLastName(value);
          }}
        />
        <input
          value={email}
          className="mb-4"
          placeholder="email"
          onChange={({ target: { value } }) => {
            setEmail(value);
          }}
        />

        <input
          className="mb-4"
          type="file"
          accept="image/*"
          onChange={(e) => {
            setImage(URL.createObjectURL(e.target.files[0]));
          }}
        />

        {image ? <img className="my-4" src={image} alt="sdsd" /> : null}

        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();

            onFormSubmit();
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddNewUser;
