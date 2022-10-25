import { FiXCircle, FiEdit2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../lib/api";

const CartProductCadastrado = ({ title, preco, img, id }: any) => {
  const navigation = useNavigate();
  const onelete = async () => {
    const { token } = JSON.parse(localStorage.getItem("user") as string);
    await deleteProduct(id, token);
    return window.location.reload();
  };
  return (
    <div className="cart_card_product">
      <div className="cart_image_product">
        <img src={img} alt="" />
      </div>
      <div className="cart_title_product">
        <p>{title}</p>
        <p className="cart_footer">
          produto é vendido e entregue por <span>Delta</span>
        </p>
      </div>
      <span className="cart_price_total">R$ {preco}</span>
      <div
        className="btn_edit"
        onClick={() => navigation(`/editproduct/${id}`)}
      >
        <FiEdit2 />
      </div>
      <div className="btn_delete" onClick={() => onelete()}>
        <FiXCircle />
      </div>
    </div>
  );
};

export default CartProductCadastrado;
