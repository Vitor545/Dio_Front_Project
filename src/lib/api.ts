import axios from "axios";

const API = "http://localhost:3001";

export const createUsers = async (
  name: string,
  email: string,
  password: string,
  telefone: string,
  cpf: string
) => {
  let result;

  await axios
    .post(`${API}/user`, {
      name,
      email,
      password,
      telefone,
      cpf,
    })
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      result = error.response.data.message;
    });

  return result;
};

export const loginUsers = async (email: string, password: string) => {
  let result;

  await axios
    .post(`${API}/login`, {
      email,
      password,
    })
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      result = error.response.data.message;
    });

  return result;
};

export const getInfoUserapi = async (userId: number, token: string) => {
  let result;

  await axios
    .get(`${API}/user/${userId}`, {
      headers: {
        authorization: `${token}`,
      },
    })
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      result = error.response.data.message;
    });

  return result;
};
