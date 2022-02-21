import axios from "axios";
const url = "https://ediaristas-workshop.herokuapp.com";

export const apiService = axios.create({
  baseURL: url,
  headers: {
      'Content-Type': 'application/json'
  }
});