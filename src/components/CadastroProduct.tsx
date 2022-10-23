import { useNavigate } from "react-router-dom";

const CadastroProduct = () => {
  const navigation = useNavigate();
  return (
    <div className="sing container">
      <div className="sing_card edit_card">
        <span className="sing_hero">cadastre seu produto</span>

        <label htmlFor="name_completo" className="sing_email">
          <span>titulo do anúncio</span>
          <input type="text" id="name_completo" />
        </label>

        <label htmlFor="cpf" className="sing_password">
          <span>titulo</span>
          <input type="text" id="cpf" />
        </label>

        <label htmlFor="telefone" className="sing_password">
          <span>preço</span>
          <input type="text" id="telefone" />
        </label>

        <label htmlFor="email" className="sing_password">
          <span>descrição</span>
          <input type="text" id="email" />
        </label>

        <label htmlFor="password" className="sing_password">
          <span>url da imagem</span>
          <input type="text" id="password" />
        </label>

        <label htmlFor="password" className="sing_password">
          <span>quantidade</span>
          <input type="text" id="password" />
        </label>

        <button className="btn">cadastrar agora</button>

        <p>
          Não se preocupe, nosso site é seguro! Ao cadastrar, você concorda com
          a nossa <span>política de privacidade</span>
        </p>

        <p className="singup_sing">
          já tem cadastrados?{" "}
          <span onClick={() => navigation("/produtoscadastrados")}>
            ver produtos
          </span>
        </p>
      </div>
    </div>
  );
};

export default CadastroProduct;
