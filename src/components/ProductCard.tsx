import { FiArrowDown, FiShoppingBag } from "react-icons/fi";
import Cep from "./Cep";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { getProductById } from "../lib/api";
import { CartContext } from "../context/Cart";

const ProductCard = () => {
  const navigation = useNavigate();
  const { pathname } = useLocation();
  const [value, setValue] = useState<any>();
  const { state, setStateGlobal } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const id = Number(pathname.replace("/produto/", ""));

  const requestProducts = async () => {
    const request = await getProductById(id);
    setValue(request);
    setLoading(false);
  };

  useEffect(() => {
    requestProducts();
  }, [pathname]);

  if (loading) {
    return (
      <div
        className="product_cep"
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginTop: "64px",
          border: 0,
        }}
      >
        <div
          className="loadingio-spinner-rolling-paoi0scu0kp"
          style={{ backgroundColor: "#E6E6E6" }}
        >
          <div className="ldio-hthev5xd2o7">
            <div></div>
          </div>
        </div>
        <span style={{ marginLeft: "16px" }}>carregando</span>
      </div>
    );
  }

  const onClickSjop = () => {
    const valueFinal = { ...value, quantity: 1 };

    const isCart: any = JSON.parse(localStorage.getItem("cart") as string);

    if (!isCart) {
      localStorage.setItem("cart", JSON.stringify([valueFinal]));
      setStateGlobal({
        ...state,
        cart: 1,
      });
      return navigation("/carrinho");
    }

    const isExist = isCart.find((c: any) => c.id === id);

    if (!isExist) {
      localStorage.setItem("cart", JSON.stringify([...isCart, valueFinal]));

      const final = [...isCart, valueFinal].map((item: any) => item.quantity);
      setStateGlobal({
        ...state,
        cart: final.reduce((acc: any, item: any) => acc + item),
      });
      return navigation("/carrinho");
    }

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
    return navigation("/carrinho");
  };

  const onClick = () => {
    const valueFinal = { ...value, quantity: 1 };
    toast.success("Adicionado ao Carrinho!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

    const isCart: any = JSON.parse(localStorage.getItem("cart") as string);

    if (!isCart) {
      localStorage.setItem("cart", JSON.stringify([valueFinal]));
      return setStateGlobal({
        ...state,
        cart: 1,
      });
    }

    const isExist = isCart.find((c: any) => c.id === id);

    if (!isExist) {
      localStorage.setItem("cart", JSON.stringify([...isCart, valueFinal]));

      const final = [...isCart, valueFinal].map((item: any) => item.quantity);
      return setStateGlobal({
        ...state,
        cart: final.reduce((acc: any, item: any) => acc + item),
      });
    }

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
    return localStorage.setItem("cart", JSON.stringify(addExtra));
  };

  return (
    <section className="product_card container">
      <div className="product_card_product">
        <div className="product_card_product_img">
          <img src={value.img} alt="product" />
        </div>
        <div className="product_card_product_card">
          <p className="product_card_product_title">{value.title_anuncio}</p>
          <div className="product_card_product_stock">
            <span>{Math.round(Math.random() * 10)} pessoas vendo</span>
            <span className="product_card_product_politica">
              política de troca e devolução
            </span>
          </div>
          <span className="product_card_product_politica">
            mais informações do produto
          </span>
          <div className="product_card_product_description">
            <span>Descrição:</span>
            <p>{value.descricao}</p>
          </div>
        </div>
      </div>
      <div className="product_card_price">
        <div className="product_card_price_price">
          <span>R$ {value.preco}</span>
          <span>
            <FiArrowDown />
            5%
          </span>
        </div>
        <p className="product_card_price_normal">R$ {value.preco}</p>
        <p className="product_card_price_vezes">
          em 12x sem juros no cartão de crédito
        </p>
        <Cep />
        <button className="btn" onClick={onClickSjop}>
          <FiShoppingBag />
          comprar
        </button>
        <button className="btn_secondary" onClick={onClick}>
          <FiShoppingBag />
          carrinho
        </button>
        <p className="product_footer">
          Este produto é vendido e entregue por <span>Delta</span>
        </p>
      </div>
    </section>
  );
};

export default ProductCard;
