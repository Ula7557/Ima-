import axios from "axios";

export const request = axios.create({
  baseURL: "https://ima-api.eurosoft.dev",
  headers: {
    'api-token': "p12378",
  },
});
