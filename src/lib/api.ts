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

export const createProduct = async (
  token: string,
  title: string,
  title_anuncio: string,
  preco: number,
  descricao: string,
  img: string,
  user_id: number
) => {
  let result;

  await axios
    .post(
      `${API}/product`,
      {
        title,
        title_anuncio,
        preco,
        descricao,
        img,
        user_id
      },
      {
        headers: {
          authorization: `${token}`,
        },
      }
    )
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      result = error.response.data.message;
    });

  return result;
};

export const deleteProduct = async (id: string, token: string) => {
  let result;

  await axios
    .delete(`${API}/product/${id}`, {
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

export const getProduct = async () => {
  let result;

  await axios
    .get(`${API}/product`, {})
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      result = error.response.data.message;
    });

  return result;
};

export const getProductById = async (id: number) => {
  let result;

  await axios
    .get(`${API}/product/${id}`, {})
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      result = error.response.data.message;
    });

  return result;
};

export const getOrders = async (id: number) => {
  let result;

  await axios
    .get(`${API}/orders/${id}`, {})
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      result = error.response.data.message;
    });

  return result;
};

export const getProductByTag = async (tag: string) => {
  let result;

  await axios
    .get(`${API}/product/tag/${tag}`, {})
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      result = error.response.data.message;
    });

  return result;
};

export const getProductCadastrados = async (id: number) => {
  let result;

  await axios
    .get(`${API}/product/cadastrado/${id}`, {})
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      result = error.response.data.message;
    });

  return result;
};

export const updateById = async (
  id: number,
  token: string,
  title: string,
  title_anuncio: string,
  preco: number,
  descricao: string,
  img: string
) => {
  let result;

  await axios
    .put(
      `${API}/product/${id}`,
      {
        title,
        title_anuncio,
        preco,
        descricao,
        img,
      },
      {
        headers: {
          authorization: `${token}`,
        },
      }
    )
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      result = error.response.data.message;
    });

  return result;
};


export const createOrders= async (
  token: string,
  user_id: number,
  pedidos: string,
) => {
  let result;

  await axios
    .post(
      `${API}/orders`,
      {
        user_id,
        pedidos
      },
      {
        headers: {
          authorization: `${token}`,
        },
      }
    )
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      result = error.response.data.message;
    });

  return result;
};