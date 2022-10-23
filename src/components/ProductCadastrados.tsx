import CartProduct from "./CartProductCadastrado";

const ProductCadastrados = () => {
  return (
    <section className="product_card container">
      <div className="cart_products produtos_cadastrados">
        <p className="cart_products_title">produtos cadastrados</p>
        <CartProduct isOrders />
        <CartProduct isOrders />
        <CartProduct isOrders />
        <CartProduct isOrders />
        <CartProduct isOrders />
        <CartProduct isOrders />
        <CartProduct isOrders />
        <CartProduct isOrders />
        <CartProduct isOrders />
      </div>
    </section>
  );
};

export default ProductCadastrados;
