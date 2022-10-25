import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../lib/api";

const CadastroProduct = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [displayNone, setDisplayNone] = useState("none");
  const [titulo, setTitulo] = useState("");
  const [titulo_anuncio, setTitulo_anuncio] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [image, setImage] = useState("");

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

  const onClick = async () => {
    const { token, id } = JSON.parse(localStorage.getItem("user") as string);
    const request = await createProduct(
      token,
      titulo,
      titulo_anuncio,
      Number(preco),
      descricao,
      image,
      id
    );

    if (typeof request === "string") {
      setError(request);
      setDisplayNone("flex");
      return navigate("/cadastroproduct");
    }
    setDisplayNone("none");
    return navigate("/produtoscadastrados");
  };

  async function locationRoute() {
    const dataU = JSON.parse(localStorage.getItem("user") as string);
    if (!dataU) {
      return navigate("/login");
    }
    return navigate("/cadastroproduct");
  }

  useEffect(() => {
    locationRoute();
  }, [navigate]);

  return (
    <div className="sing container">
      <div className="sing_card edit_card">
        <span className="sing_hero">cadastre seu produto</span>

        <div className="ms_gerror" style={{ display: displayNone }}>
          <span>{error}</span>
        </div>

        <label htmlFor="title" className="sing_email">
          <span>titulo do anúncio</span>
          <input type="text" id="title" onChange={onChangeTitle} />
        </label>

        <label htmlFor="title_anuncio" className="sing_password">
          <span>titulo</span>
          <input
            type="text"
            id="title_anuncio"
            onChange={onChangeTitleAnuncio}
          />
        </label>

        <label htmlFor="preco" className="sing_password">
          <span>preço</span>
          <input type="text" id="preco" onChange={onChangePrice} />
        </label>

        <label htmlFor="descricao" className="sing_password">
          <span>descrição</span>
          <input type="text" id="descricao" onChange={onChangeDescription} />
        </label>

        <label htmlFor="image" className="sing_password">
          <span>url da imagem</span>
          <input type="text" id="image" onChange={onChangeImage} />
        </label>

        <button className="btn" onClick={onClick}>
          cadastrar agora
        </button>

        <p>
          Não se preocupe, nosso site é seguro! Ao cadastrar, você concorda com
          a nossa <span>política de privacidade</span>
        </p>

        <p className="singup_sing">
          já tem cadastrados?{" "}
          <span onClick={() => navigate("/produtoscadastrados")}>
            ver produtos
          </span>
        </p>
      </div>
    </div>
  );
};

export default CadastroProduct;
