import Phone from "../img/phone.png";

const CartProduct = () => {
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
      <div className="cart_quantity">
        <span>-</span>
        <span>1</span>
        <span>+</span>
      </div>
      <span className="cart_price_total">R$ 2.499,00</span>
    </div>
  );
};

export default CartProduct;
