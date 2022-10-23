import Phone from "../img/phone.png";
import { FiXCircle, FiEdit2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

type ICartProduct = {
  isOrders: boolean;
};

const CartProductCadastrado = ({ isOrders }: ICartProduct) => {
  const navigation = useNavigate();
  return (
    <div className="cart_card_product">
      <div className="cart_image_product">
        <img src={Phone} alt="" />
      </div>
      <div className="cart_title_product">
        <p>Smartphone Samsung Galaxy S22 256GB Azul</p>
        <p className="cart_footer">
          produto é vendido e entregue por <span>Delta</span>
        </p>
      </div>
      <div
        className="cart_quantity"
        style={{ justifyContent: isOrders ? "center" : "space-between" }}
      >
        <span style={{ display: !isOrders ? "inline" : "none" }}>-</span>
        <span>1</span>
        <span style={{ display: !isOrders ? "inline" : "none" }}>+</span>
      </div>
      <span className="cart_price_total">R$ 2.499,00</span>
      <div className="btn_edit" onClick={() => navigation("/editproduct/1515")}>
        <FiEdit2 />
      </div>
      <div className="btn_delete">
        <FiXCircle />
      </div>
    </div>
  );
};

export default CartProductCadastrado;
