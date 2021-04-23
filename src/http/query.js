import axios from 'axios';

const host = axios.create({
    baseURL: "http://localhost:3500",
    responseType: "json"
  });

  export const getData = async ()=>{
      const response = await host.get("/")
      return response.data
  }