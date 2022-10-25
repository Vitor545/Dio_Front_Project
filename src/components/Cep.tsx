import { useState } from "react";
import { FiHome, FiMapPin, FiTruck } from "react-icons/fi";
import { buscaCeps } from "../lib/api";

const Card = () => {
  const [isInfo, setIsInfo] = useState(false);
  const [value, setValue] = useState<any>();
  const [cep, setCep] = useState<any>();
  const [buscou, setBuscou] = useState<any>(false);

  const buscaCep = async (cep: string) => {
    const final = await buscaCeps(cep);
    setValue(final)
  };

  const onlynumber = (evt: any) => {
    const theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    const regex = /^[0-9]+$/;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  };

  function noInformeted() {
    const date = new Date();
    const currentMonth = date.getMonth() + 1; 
    return (
      <div className="product_cep">
        <div className="product_cep_rua">
          <FiMapPin />
          <span>
            {value?.logradouro}
          </span>
        </div>
        <div className="product_cep_frete">
          <div>
            <FiTruck />
            <span>
              <span>Receba até</span> 30 do {currentMonth}
            </span>
          </div>
          <span>R$ 21, 36</span>
        </div>
        <div className="product_cep_loja">
          <div>
            <FiHome />
            <span>
              <span>Retire na loja em</span> 01 do {currentMonth + 1}
            </span>
          </div>
          <span>Grátis</span>
        </div>
      </div>
    );
  }

  function loadingCep() {
    return (
      <div
        className="product_cep"
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div className="loadingio-spinner-rolling-paoi0scu0kp">
          <div className="ldio-hthev5xd2o7">
            <div></div>
          </div>
        </div>
        <span style={{ marginLeft: "16px" }}>carregando cep</span>
      </div>
    );
  }

  const onChange = (e: any) => {
    setCep(e.target.value);
  };

  const onClick = () => {
    setIsInfo(true)
    buscaCep(cep)
    setIsInfo(false)
    setBuscou(true)
  }

  if (isInfo) {
    return loadingCep();
  }

  if (buscou) {
    return noInformeted();
  }

  return (
    <div className="product_cep">
      <div className="product_cep_rua">
        <span>calcular frete e prazo</span>
      </div>
      <div className="product_cep_button">
        <input
          type="text"
          maxLength={8}
          onChange={onChange}
          onKeyPress={(e: any) => onlynumber(e)}
        />
        <button onClick={onClick}>ok</button>
      </div>
    </div>
  );
};

export default Card;
