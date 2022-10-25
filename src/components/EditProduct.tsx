import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getProductById, updateById } from "../lib/api";

const EditProduct = () => {
  const navigation = useNavigate();
  const { pathname } = useLocation();
  const id = Number(pathname.replace("/editproduct/", ""));
  const [error, setError] = useState("");
  const [displayNone, setDisplayNone] = useState("none");
  const [titulo, setTitulo] = useState("");
  const [titulo_anuncio, setTitulo_anuncio] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  const requestProducts = async () => {
    const dataU = JSON.parse(localStorage.getItem("user") as string);
    if (!dataU) {
      return navigation("/login");
    }
    const request: any = await getProductById(id);
    const { title, descricao, preco, img, title_anuncio } = request;
    setTitulo_anuncio(title_anuncio);
    setTitulo(title);
    setPreco(preco);
    setDescricao(descricao);
    setImage(img);
    setLoading(false);
  };

  useEffect(() => {
    requestProducts();
  }, []);

  const onChangeTitle = (e: any) => {
    setTitulo(e.target.value);
  };

  const onChangeTitleAnuncio = (e: any) => {
    setTitulo_anuncio(e.target.value);
  };

  const onChangePrice = (e: any) => {
    setPreco(e.target.value);
  };

  const onChangeImage = (e: any) => {
    setImage(e.target.value);
  };

  const onChangeDescription = (e: any) => {
    setDescricao(e.target.value);
  };

  if (loading) {
    return (
      <div
        className="product_cep"
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginTop: "64px",
          border: 0,
        }}
      >
        <div
          className="loadingio-spinner-rolling-paoi0scu0kp"
          style={{ backgroundColor: "#E6E6E6" }}
        >
          <div className="ldio-hthev5xd2o7">
            <div></div>
          </div>
        </div>
        <span style={{ marginLeft: "16px" }}>carregando</span>
      </div>
    );
  }

  const onClick = async () => {
    const { token } = JSON.parse(localStorage.getItem("user") as string);
    const request = await updateById(
      id,
      token,
      titulo,
      titulo_anuncio,
      Number(preco),
      descricao,
      image
    );

    if (typeof request === "string") {
      setError(request);
      setDisplayNone("flex");
      return navigation(pathname);
    }
    setDisplayNone("none");
    return navigation("/produtoscadastrados");
  };

  return (
    <div className="sing container">
      <div className="sing_card edit_card">
        <span className="sing_hero">editar seu produto</span>

        <div className="ms_gerror" style={{ display: displayNone }}>
          <span>{error}</span>
        </div>

        <label htmlFor="name_completo" className="sing_email">
          <span>titulo do anúncio</span>
          <input
            type="text"
            id="name_completo"
            value={titulo_anuncio}
            onChange={onChangeTitleAnuncio}
          />
        </label>

        <label htmlFor="cpf" className="sing_password">
          <span>titulo</span>
          <input type="text" id="cpf" value={titulo} onChange={onChangeTitle} />
        </label>

        <label htmlFor="telefone" className="sing_password">
          <span>preço</span>
          <input
            type="text"
            id="telefone"
            value={preco}
            onChange={onChangePrice}
          />
        </label>

        <label htmlFor="email" className="sing_password">
          <span>descrição</span>
          <input
            type="text"
            id="email"
            value={descricao}
            onChange={onChangeDescription}
          />
        </label>

        <label htmlFor="password" className="sing_password">
          <span>url da imagem</span>
          <input
            type="text"
            id="password"
            value={image}
            onChange={onChangeImage}
          />
        </label>

        <button className="btn" onClick={onClick}>
          editar agora
        </button>

        <p>
          Não se preocupe, nosso site é seguro! Ao editar, você concorda com a
          nossa <span>política de privacidade</span>
        </p>

        <p className="singup_sing">
          quer cadastrar agora?{" "}
          <span onClick={() => navigation("/cadastroproduct")}>cadastrar</span>
        </p>
      </div>
    </div>
  );
};

export default EditProduct;
