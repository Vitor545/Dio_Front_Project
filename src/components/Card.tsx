import Phone from "../img/phone.png";

const Card = () => {
  return (
    <div className="card_container">
      <div className="card_img">
        <img src={Phone} alt="produto" />
      </div>
      <p className="card_title">Smartphone Samsung Galaxy S22 256GB Azul</p>
      <div className="card_price_container">
        <div className="card_price_price">
          <span>R$ 2.499,00</span>
          <span>R$ 2.499,00</span>
        </div>
        <div className="card_price_ofter">21%</div>
      </div>
      <p className="card_description">
        em 12x de R$ 208,25 no cartão de credito <br></br>ou <span>24x</span> de{" "}
        <span>R$ 104,12</span> no Delta Card
      </p>
    </div>
  );
};

export default Card;
