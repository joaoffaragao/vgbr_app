import axios from "axios";

export const server = axios.create({
  baseURL: "http://localhost:3000/",
});

server.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
server.defaults.headers.get["Content-Type"] = "application/json;charset=utf-8";

export default server;
