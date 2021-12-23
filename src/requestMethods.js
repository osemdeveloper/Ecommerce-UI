import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjlhYmQ0YWI1Yzk2NTU5ZmViOTdhYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTYwMDYxNywiZXhwIjoxNjM5ODU5ODE3fQ.CzjzG7Qcub2lzsfzHmHYaX7PYB9JSLH02uFuVUPFL4g
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});