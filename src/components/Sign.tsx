import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUsers } from "../lib/api";

const Sign = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [displayNone, setDisplayNone] = useState("none");

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const onClick = async () => {
    const request = await loginUsers(email, password);

    if (typeof request === "string") {
      setError(request);
      setDisplayNone("flex");
      return navigation("/login");
    }
    setDisplayNone("none");
    const { token, user }: any = request;
    localStorage.setItem("user", JSON.stringify({ token, ...user }));
    return navigation("/");
  };

  return (
    <div className="sing container">
      <div className="sing_card">
        <span className="sing_hero">entrar agora</span>

        <div className="ms_gerror" style={{ display: displayNone }}>
          <span>{error}</span>
        </div>

        <label htmlFor="email" className="sing_email">
          <span>email</span>
          <input type="text" id="email" onChange={onChangeEmail} />
        </label>

        <label htmlFor="password" className="sing_password">
          <span>senha</span>
          <input type="text" id="password" onChange={onChangePassword} />
        </label>

        <button className="btn" onClick={onClick}>
          entrar agora
        </button>

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
