import axios from "axios";
import { BACKEND_URL } from "../globals";

const apiAxios = axios.create({
    baseURL: BACKEND_URL,
    timeout: 1000
  });

const sendArtistInput = async (artist1: string, artist2: string) => {
    return await apiAxios.get('graph', {params: {artist1: artist1, artist2: artist2}});
};