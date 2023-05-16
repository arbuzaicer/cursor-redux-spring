import React from "react";
import { useDispatch } from "react-redux";

import { Button } from "../../../components/index";
import styles from "./sing-in.module.css";
import { setLogInAction } from "../../../store/actions/auth.actions";

const SingInPage = () => {
  const dispatch = useDispatch();
  const onSignIn = () => {
    dispatch(setLogInAction());
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>Hello from sing in page</h1>
        <Button onClick={onSignIn}>Sign in</Button>
      </div>
    </div>
  );
};

export default SingInPage;
