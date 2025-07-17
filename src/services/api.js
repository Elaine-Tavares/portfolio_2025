// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://elainetavaresweb.com/elainetavaresweb_backend"  // Caminho até minha pasta PHP no XAMPP
});


export default api;