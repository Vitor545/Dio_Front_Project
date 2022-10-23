import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigation = useNavigate();
  return (
    <div className="sing container">
      <div className="sing_card singup_card">
        <span className="sing_hero">cadastre agora</span>

        <label htmlFor="name_completo" className="sing_email">
          <span>nome completo</span>
          <input type="text" id="name_completo" />
        </label>

        <label htmlFor="cpf" className="sing_password">
          <span>cpf</span>
          <input type="text" id="cpf" />
        </label>

        <label htmlFor="telefone" className="sing_password">
          <span>telefone</span>
          <input type="text" id="telefone" />
        </label>

        <label htmlFor="email" className="sing_password">
          <span>email</span>
          <input type="text" id="email" />
        </label>

        <label htmlFor="password" className="sing_password">
          <span>senha</span>
          <input type="text" id="password" />
        </label>

        <button className="btn">cadastrar agora</button>

        <p>
          Não se preocupe, nosso site é seguro! Ao criar o seu cadastro, você
          concorda com a nossa <span>política de privacidade</span>
        </p>

        <p className="singup_sing">
          já tem cadastro?{" "}
          <span onClick={() => navigation("/login")}>entrar</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
