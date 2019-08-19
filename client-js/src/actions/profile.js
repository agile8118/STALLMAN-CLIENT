import axios from "axios";
import util from "../util";
import { baseURL } from "../api/config";

export const getProfileInfo = () => async dispatch => {
  const { data } = await axios.get(`${baseURL}/account/profile/`, {
    headers: { Authorization: `Token ${localStorage.getItem("token")}` }
  });

  const info = {
    email: data[0].email,
    first_name: data[0].first_name,
    last_name: data[0].last_name,
    mobile_phone: data[0].mobile_phone,
    username: data[0].username,
    url: util.convertToHttps(data[0].links.self)
  };

  dispatch({ type: "GET_PROFILE_INFO", payload: info });
};
