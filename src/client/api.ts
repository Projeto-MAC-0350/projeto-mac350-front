import axios from "axios";
import { BACKEND_URL } from "../globals";

const apiAxios = axios.create({
    baseURL: BACKEND_URL,
    timeout: 1000
  });

  axios.interceptors.request.use(x => {
    console.log("Request: ", x);
    return x;
  });

  export const sendArtistInput = async (artist1: string, artist2: string) => {
    console.log("Sending artist input to backend: ", artist1, artist2)
    return await apiAxios.get('/path', { params: { artist1: artist1, artist2: artist2 } });
};