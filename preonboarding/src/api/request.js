import axios from "axios";
const ACCESS_TOKEN = localStorage.getItem("accessToken");

export const instance = axios.create({
  baseURL: `https://pre-onboarding-selection-task.shop`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const instanceal = axios.create({
  baseURL: `https://pre-onboarding-selection-task.shop`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});

export const instanceget = axios.create({
  baseURL: `https://pre-onboarding-selection-task.shop`,
  headers: {
    // "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});
instance.interceptors.request.use(
  function (config) {
    if (ACCESS_TOKEN) {
      config.headers["Authorization"] = ACCESS_TOKEN;
    } else {
      config.headers["Authorization"] = localStorage.getItem("accessToken");
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const onSignUp = async (data) => {
  return await instance.post(`/auth/signup`, data);
};

export const onLogin = async (data) => {
  return await instance.post(`/auth/signin`, data);
};

//todo
export const getTodo = async () => {
  return await instanceget.get(`/todos`);
};

export const addTodo = async (todo) => {
  return await instanceal.post(`/todos`, todo);
};

export const deleteTodo = async (id) => {
  return await instanceget.delete(`todos/${id}`);
};

export const updateTodo = async (data) => {
  const { id } = data;
  const send = { todo: data.todo, isCompleted: data.isCompleted };
  return await instanceal.put(`/todos/${id}`, send);
};
