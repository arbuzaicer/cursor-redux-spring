import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import AuthRoutesNavigation from "./navigation/AuthRoutes";
import { getIsAuthSelector } from "./store/reducers/auth.reducer";
import PrivateRoutesNavigation from "./navigation/PrivateRoutes";
import { useEffect } from "react";

import { LOCAL_STORAGE_AUTH_KEY } from "./utils/constants";
import { setLogInAction, setLogOutAction } from "./store/actions/auth.actions";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuthSelector);

  useEffect(() => {
    const isAuthorized = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)
    );

    dispatch(isAuthorized ? setLogInAction() : setLogOutAction());
  }, [dispatch]);

  return (
    <div className="App">
      {isAuth ? <PrivateRoutesNavigation /> : <AuthRoutesNavigation />}
    </div>
  );
}

export default App;
