import axios from "axios";
import util from "../util";
import { baseURL } from "../api/config";

export const getProfileInfo = () => async dispatch => {
  let { data } = await axios.get(`${baseURL}/account/profile/`, {
    headers: { Authorization: `Token ${localStorage.getItem("token")}` }
  });

  data = data.results[0];

  const info = {
    email: data.email,
    first_name: data.first_name,
    last_name: data.last_name,
    mobile_phone: data.mobile_phone,
    username: data.username,
    url: util.convertToHttps(data.links.self)
  };

  dispatch({ type: "GET_PROFILE_INFO", payload: info });
};
