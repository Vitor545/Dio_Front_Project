import { useNavigate } from "react-router-dom";

const Sign = () => {
  const navigation = useNavigate();
  return (
    <div className="sing container">
      <div className="sing_card">
        <span className="sing_hero">entrar agora</span>

        <label htmlFor="email" className="sing_email">
          <span>email</span>
          <input type="text" id="email" />
        </label>

        <label htmlFor="password" className="sing_password">
          <span>senha</span>
          <input type="text" id="password" />
        </label>

        <button className="btn">entrar agora</button>

        <p>
          Não se preocupe, nosso site é seguro! Ao entrar, você concorda com a
          nossa <span>política de privacidade</span>
        </p>

        <p className="singup_sing">
          não tem cadastro?{" "}
          <span onClick={() => navigation("/singup")}>cadastrar</span>
        </p>
      </div>
    </div>
  );
};

export default Sign;
