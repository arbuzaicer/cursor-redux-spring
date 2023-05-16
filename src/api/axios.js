import axios from "axios";

import store from "../store/store";
import { LOCAL_STORAGE_TOKENS_DATA } from "../utils/constants";

axios.defaults.baseURL = "https://moviesdatabase.p.rapidapi.com";

axios.interceptors.request.use((request) => {
  const storeInner = store.getState();

  if (storeInner.authReducer.isAuth) {
    const tokenData = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_TOKENS_DATA)
    );

    request.headers = { ...request.headers, ...tokenData };
  }

  return request;
});

export default axios;
