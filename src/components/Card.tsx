import { useNavigate } from "react-router-dom";

const Card = ({ img, preco, id, title }: any) => {
  const navigation = useNavigate();
  return (
    <div
      className="card_container"
      onClick={() => navigation(`/produto/${id}`)}
    >
      <div className="card_img">
        <img src={img} alt="produto" />
      </div>
      <p className="card_title">{title}</p>
      <div className="card_price_container">
        <div className="card_price_price">
          <span>R$ {preco}</span>
          <span>R$ {preco}</span>
        </div>
        <div className="card_price_ofter">5%</div>
      </div>
      <p className="card_description">
        em 12x de R$ 208,25 no cartão de credito <br></br>ou <span>24x</span> de{" "}
        <span>R$ 104,12</span> no Delta Card
      </p>
    </div>
  );
};

export default Card;
