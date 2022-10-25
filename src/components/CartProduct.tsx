import { useContext } from "react";
import { CartContext } from "../context/Cart";

type ICartProduct = {
  isOrders?: boolean;
  id: number;
  title: string;
  quantity: number;
  price: number;
  img: string;
};

const CartProduct = ({
  id,
  isOrders = false,
  title,
  quantity,
  price,
  img,
}: ICartProduct) => {
  const { state, setStateGlobal } = useContext(CartContext);

  const onClickIescrementa = (id: number) => {
    const isCart = JSON.parse(localStorage.getItem("cart") as string);
    const addExtra = isCart.map((obj: any) => {
      if (obj.id === id) {
        const increment = { ...obj, quantity: Number(obj.quantity) + 1 };
        return increment;
      }
      return obj;
    });
    const final = addExtra.map((item: any) => item.quantity);
    setStateGlobal({
      ...state,
      cart: final.reduce((acc: any, item: any) => acc + item),
    });
    localStorage.setItem("cart", JSON.stringify(addExtra));
    return window.location.reload();
  };

  const onClickDescrementa = (id: number) => {
    const isCart = JSON.parse(localStorage.getItem("cart") as string);
    const addExtra = isCart.map((obj: any) => {
      if (obj.id === id) {
        const increment = { ...obj, quantity: Number(obj.quantity) - 1 };
        return increment;
      }
      return obj;
    });
    const final = addExtra.map((item: any) => item.quantity);
    setStateGlobal({
      ...state,
      cart: final.reduce((acc: any, item: any) => acc + item),
    });
    localStorage.setItem("cart", JSON.stringify(addExtra));
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
      <div
        className="cart_quantity"
        style={{ justifyContent: isOrders ? "center" : "space-between" }}
      >
        <span
          onClick={() => onClickDescrementa(id)}
          style={{ display: !isOrders ? "inline" : "none" }}
        >
          -
        </span>
        <span>{quantity}</span>
        <span
          onClick={() => onClickIescrementa(id)}
          style={{ display: !isOrders ? "inline" : "none" }}
        >
          +
        </span>
      </div>
      <span className="cart_price_total">R$ {price.toLocaleString('pt-BR')}</span>
    </div>
  );
};

export default CartProduct;
