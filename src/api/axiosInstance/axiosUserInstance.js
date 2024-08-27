import axios from "axios";
import { Constants } from "../../constants/Constants";
import { handleAxiosErrorHelper } from "../../utils/helpers/handleAxiosErrorHelper";
// import { useSelector } from "react-redux";
import { useAuthToken } from "./useAuthToken";
// import {store} from '../../redux/store/store'

// export const useAuthToken = () => {
//   const { token } = useSelector((state) => state.auth.user);
//   return token;
// };
export const axiosRefreshInstance = axios.create({
  baseURL: Constants.SERVER_URL,
  withCredentials: true,
});

export const axiosUserInstance = axios.create({
  baseURL: Constants.SERVER_URL,
  withCredentials: true,
});

axiosRefreshInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    handleAxiosErrorHelper(error);

    return Promise.reject(error);
  }
);
axiosUserInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    handleAxiosErrorHelper(error);

    return Promise.reject(error);
  }
);
axiosUserInstance.interceptors.request.use(
  (request) => {

    const user = localStorage.getItem("user");
  let token = null;
  if (user) {
    token = JSON.parse(user);
  }


    if (token) {
      request.headers["Authorization"] = `Bearer ${token.token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
