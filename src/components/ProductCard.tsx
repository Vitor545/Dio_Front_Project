import Phone from "../img/phone.png";
import { FiArrowDown, FiShoppingBag } from "react-icons/fi";
import Cep from "./Cep";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProductCard = () => {
  const navigation = useNavigate();
  const { pathname } = useLocation();
  const id = Number(pathname.replace("/produto/", ""));

  const clickShop = () => {
    const isCart: any = JSON.parse(localStorage.getItem("cart") as string);

    if (!isCart) {
      localStorage.setItem(
        "cart",
        JSON.stringify([
          {
            id,
            price: "R$ 2.499,00",
            title: "Smartphone Samsung Galaxy M23 5G 128GB",
            quantity: 1,
            img: "sdfdsfdsfs/fddsfsdfdsfsdf",
          },
        ])
      );
      return navigation("/carrinho");
    }

    const isExist = isCart.find((c: any) => c.id === id);

    if (!isExist) {
      localStorage.setItem(
        "cart",
        JSON.stringify([
          ...isCart,
          {
            id,
            price: "R$ 2.499,00",
            title: "Smartphone Samsung Galaxy M23 5G 128GB",
            quantity: 1,
            img: "sdfdsfdsfs/fddsfsdfdsfsdf",
          },
        ])
      );
      return navigation("/carrinho");
    }

    const addExtra = isCart.map((obj: any) => {
      if (obj.id === id) {
        const increment = { ...obj, quantity: Number(obj.quantity) + 1 };
        return increment;
      }
      return obj;
    });

    localStorage.setItem("cart", JSON.stringify(addExtra));
    return navigation("/carrinho");
  };

  const onClick = () => {
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
      return localStorage.setItem(
        "cart",
        JSON.stringify([
          {
            id,
            price: "R$ 2.499,00",
            title: "Smartphone Samsung Galaxy M23 5G 128GB",
            quantity: 1,
            img: "sdfdsfdsfs/fddsfsdfdsfsdf",
          },
        ])
      );
    }

    const isExist = isCart.find((c: any) => c.id === id);

    if (!isExist) {
      return localStorage.setItem(
        "cart",
        JSON.stringify([
          ...isCart,
          {
            id,
            price: "R$ 2.499,00",
            title: "Smartphone Samsung Galaxy M23 5G 128GB",
            quantity: 1,
            img: "sdfdsfdsfs/fddsfsdfdsfsdf",
          },
        ])
      );
    }

    const addExtra = isCart.map((obj: any) => {
      if (obj.id === id) {
        const increment = { ...obj, quantity: Number(obj.quantity) + 1 };
        return increment;
      }
      return obj;
    });

    return localStorage.setItem("cart", JSON.stringify(addExtra));
  };

  return (
    <section className="product_card container">
      <div className="product_card_product">
        <div className="product_card_product_img">
          <img src={Phone} alt="product" />
        </div>
        <div className="product_card_product_card">
          <p className="product_card_product_title">
            Smartphone Samsung Galaxy M23 5G 128GB Processador Snapdragon Tela
            6.6" Dual Chip 6GB RAM Câmera Tripla + Selfie 8MP - Azul
          </p>
          <div className="product_card_product_stock">
            <span>5 itens</span>
            <span className="product_card_product_politica">
              política de troca e devolução
            </span>
          </div>
          <span className="product_card_product_politica">
            mais informações do produto
          </span>
          <div className="product_card_product_description">
            <span>Descrição:</span>
            <p>
              Tenha tudo o que precisa ao mesmo tempo com o smartphone Galaxy
              M13 da Samsung. Ele é dual chip com tecnologia 4G e vem na cor
              cobre. Conta com tela infinita PLS TFT LCD de 6,6" FHD+ que faz
              com que você tenha espaço para ver e fazer mais com qualidade. O
              design conecta a câmera ao corpo de forma suave, porém com curvas
              refinadas. A câmera selfie tem 8MP pra você sair bem nas fotos.
              Capture momentos memoráveis com detalhes claros com a câmera
              tripla sendo a principal de 50MP, com ela você poderá fazer fotos
              com muita qualidade. O produto possui processamento Octa-core com
              4GB de memória RAM para desempenho eficiente durante o manuseio.
              Usufrua com a capacidade de 128GB da memória interna para guardar
              seus vídeos, fotos e os aplicativos de sua preferência.
            </p>
          </div>
        </div>
      </div>
      <div className="product_card_price">
        <div className="product_card_price_price">
          <span>R$ 2.499,00</span>
          <span>
            <FiArrowDown />
            5%
          </span>
        </div>
        <p className="product_card_price_normal">R$ 2.499,00</p>
        <p className="product_card_price_vezes">
          em 12x sem juros no cartão de crédito
        </p>
        <Cep />
        <button className="btn" onClick={clickShop}>
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
