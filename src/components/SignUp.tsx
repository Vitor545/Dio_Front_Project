import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUsers } from "../lib/api";

const SignUp = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [error, setError] = useState("");
  const [displayNone, setDisplayNone] = useState("none");

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const onChangeName = (e: any) => {
    setName(e.target.value);
  };

  const onChangeCpf = (e: any) => {
    setCpf(e.target.value);
  };

  const onChangeTelefone = (e: any) => {
    setTelefone(e.target.value);
  };

  const onClick = async () => {
    const request = await createUsers(name, email, password, telefone, cpf);

    if (typeof request === "string") {
      setError(request);
      setDisplayNone("flex");
      return navigation("/singup");
    }
    setDisplayNone("none");
    const { token, user }: any = request;
    localStorage.setItem("user", JSON.stringify({ token, ...user }));
    return navigation("/");
  };

  return (
    <div className="sing container">
      <div className="sing_card singup_card">
        <span className="sing_hero">cadastre agora</span>

        <div className="ms_gerror" style={{ display: displayNone }}>
          <span>{error}</span>
        </div>

        <label htmlFor="name_completo" className="sing_email">
          <span>nome completo</span>
          <input type="text" id="name_completo" onChange={onChangeName} />
        </label>

        <label htmlFor="cpf" className="sing_password">
          <span>cpf</span>
          <input type="text" id="cpf" onChange={onChangeCpf} />
        </label>

        <label htmlFor="telefone" className="sing_password">
          <span>telefone</span>
          <input type="text" id="telefone" onChange={onChangeTelefone} />
        </label>

        <label htmlFor="email" className="sing_password">
          <span>email</span>
          <input type="text" id="email" onChange={onChangeEmail} />
        </label>

        <label htmlFor="password" className="sing_password">
          <span>senha</span>
          <input type="text" id="password" onChange={onChangePassword} />
        </label>

        <button className="btn" onClick={onClick}>
          cadastrar agora
        </button>

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
