import { useState } from "react";
import { FiHome, FiMapPin, FiTruck } from "react-icons/fi";

const Card = () => {
  const [isInfo, setIsInfo] = useState(false);

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
    return (
      <div className="product_cep">
        <div className="product_cep_rua">
          <span>calcular frete e prazo</span>
        </div>
        <div className="product_cep_button">
          <input
            type="text"
            maxLength={8}
            onKeyPress={(e: any) => onlynumber(e)}
          />
          <button>ok</button>
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

  if (isInfo) {
    return loadingCep();
  }

  return (
    <div className="product_cep">
      <div className="product_cep_rua">
        <FiMapPin />
        <span>
          Rua Claudio Rodrigues Lopes, Destrito dsggg gfdgzdsgfdfg fdgsfdgds
          fdgsgfdsg gfdsfdgds
        </span>
      </div>
      <div className="product_cep_frete">
        <div>
          <FiTruck />
          <span>
            <span>Receba até</span> 21 de setembro
          </span>
        </div>
        <span>R$ 21, 36</span>
      </div>
      <div className="product_cep_loja">
        <div>
          <FiHome />
          <span>
            <span>Retire na loja em</span> 15 de setembro
          </span>
        </div>
        <span>Grátis</span>
      </div>
    </div>
  );
};

export default Card;
