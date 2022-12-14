import { useContext, useEffect, useState } from "react";
import { BiCartAlt, BiUserCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from '../context/Cart';

const Header = () => {
  const navigation = useNavigate();
  const dataUser: any = JSON.parse(localStorage.getItem("user") as string);
  const dataCart: any = JSON.parse(localStorage.getItem("cart") as string);
  const { cart, state, setStateGlobal } = useContext(CartContext);
  const [haveUser, setHasUser] = useState<boolean>();
  const [isClick, setIsClick] = useState<boolean>(false);

  useEffect(() => {
    if (!dataUser) {
      return setHasUser(false);
    }
    return setHasUser(true);
  }, [dataUser]);

  return (
    <header
      onClick={() => {
        if (isClick) {
          setIsClick(false);
        }
      }}
    >
      <div className="header_title">
        <div className="container header_title_container">
          <span className="header_title_fister">promoção novaaa geração</span>
          <span>&#8226;</span>
          <span>
            compre seu video-game da <span>nova geração com 15%</span>
          </span>
          <span>&#8226;</span>
          <span
            onClick={() => navigation("/search?input=video games")}
            className="header_title_last"
          >
            {"saiba mais >"}
          </span>
        </div>
      </div>
      <div className="header_main">
        <div className="container header_main_container">
          <div className="header_content">
            <Link to="/">
              <svg
                width="139"
                height="34"
                className="logo_header"
                viewBox="0 0 139 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M47.7045 26H41.517V8.54545H47.7557C49.5114 8.54545 51.0227 8.89489 52.2898 9.59375C53.5568 10.2869 54.5313 11.2841 55.2131 12.5852C55.9006 13.8864 56.2443 15.4432 56.2443 17.2557C56.2443 19.0739 55.9006 20.6364 55.2131 21.9432C54.5313 23.25 53.5511 24.2528 52.2727 24.9517C51 25.6506 49.4773 26 47.7045 26ZM45.2074 22.8381H47.5511C48.642 22.8381 49.5597 22.6449 50.304 22.2585C51.054 21.8665 51.6165 21.2614 51.9915 20.4432C52.3722 19.6193 52.5625 18.5568 52.5625 17.2557C52.5625 15.9659 52.3722 14.9119 51.9915 14.0938C51.6165 13.2756 51.0568 12.6733 50.3125 12.2869C49.5682 11.9006 48.6506 11.7074 47.5597 11.7074H45.2074V22.8381ZM64.8757 26.2557C63.5291 26.2557 62.37 25.983 61.3984 25.4375C60.4325 24.8864 59.6882 24.108 59.1655 23.1023C58.6428 22.0909 58.3814 20.8949 58.3814 19.5142C58.3814 18.1676 58.6428 16.9858 59.1655 15.9688C59.6882 14.9517 60.424 14.1591 61.3729 13.5909C62.3274 13.0227 63.4467 12.7386 64.7308 12.7386C65.5945 12.7386 66.3984 12.8778 67.1428 13.1562C67.8928 13.429 68.5462 13.8409 69.103 14.392C69.6655 14.9432 70.103 15.6364 70.4155 16.4716C70.728 17.3011 70.8842 18.2727 70.8842 19.3864V20.3835H59.8303V18.1335H67.4666C67.4666 17.6108 67.353 17.1477 67.1257 16.7443C66.8984 16.3409 66.5831 16.0256 66.1797 15.7983C65.782 15.5653 65.3189 15.4489 64.7905 15.4489C64.2393 15.4489 63.7507 15.5767 63.3246 15.8324C62.9041 16.0824 62.5746 16.4205 62.3359 16.8466C62.0973 17.267 61.9751 17.7358 61.9695 18.2528V20.392C61.9695 21.0398 62.0888 21.5994 62.3274 22.071C62.5717 22.5426 62.9155 22.9062 63.3587 23.1619C63.8018 23.4176 64.3274 23.5455 64.9354 23.5455C65.3388 23.5455 65.7081 23.4886 66.0433 23.375C66.3786 23.2614 66.6655 23.0909 66.9041 22.8636C67.1428 22.6364 67.3246 22.358 67.4496 22.0284L70.8075 22.25C70.6371 23.0568 70.2876 23.7614 69.7592 24.3636C69.2365 24.9602 68.5604 25.4261 67.7308 25.7614C66.907 26.0909 65.9553 26.2557 64.8757 26.2557ZM76.8842 8.54545V26H73.2536V8.54545H76.8842ZM86.7557 12.9091V15.6364H78.8722V12.9091H86.7557ZM80.6619 9.77273H84.2926V21.9773C84.2926 22.3125 84.3438 22.5739 84.446 22.7614C84.5483 22.9432 84.6903 23.071 84.8722 23.1449C85.0597 23.2187 85.2756 23.2557 85.5199 23.2557C85.6903 23.2557 85.8608 23.2415 86.0312 23.2131C86.2017 23.179 86.3324 23.1534 86.4233 23.1364L86.9943 25.8381C86.8125 25.8949 86.5568 25.9602 86.2273 26.0341C85.8977 26.1136 85.4972 26.1619 85.0256 26.179C84.1506 26.2131 83.3835 26.0966 82.7244 25.8295C82.071 25.5625 81.5625 25.1477 81.1989 24.5852C80.8352 24.0227 80.6563 23.3125 80.6619 22.4545V9.77273ZM92.8537 26.2472C92.0185 26.2472 91.2741 26.1023 90.6207 25.8125C89.9673 25.517 89.4503 25.0824 89.0696 24.5085C88.6946 23.929 88.5071 23.2074 88.5071 22.3438C88.5071 21.6165 88.6406 21.0057 88.9077 20.5114C89.1747 20.017 89.5384 19.6193 89.9986 19.3182C90.4588 19.017 90.9815 18.7898 91.5668 18.6364C92.1577 18.483 92.777 18.375 93.4247 18.3125C94.1861 18.233 94.7997 18.1591 95.2656 18.0909C95.7315 18.017 96.0696 17.9091 96.2798 17.767C96.4901 17.625 96.5952 17.4148 96.5952 17.1364V17.0852C96.5952 16.5455 96.4247 16.1278 96.0838 15.8324C95.7486 15.5369 95.2713 15.3892 94.652 15.3892C93.9986 15.3892 93.4787 15.5341 93.0923 15.8239C92.706 16.108 92.4503 16.4659 92.3253 16.8977L88.9673 16.625C89.1378 15.8295 89.473 15.142 89.973 14.5625C90.473 13.9773 91.1179 13.5284 91.9077 13.2159C92.7031 12.8977 93.6236 12.7386 94.669 12.7386C95.3963 12.7386 96.0923 12.8239 96.7571 12.9943C97.4276 13.1648 98.0213 13.429 98.5384 13.7869C99.0611 14.1449 99.473 14.6051 99.7741 15.1676C100.075 15.7244 100.226 16.392 100.226 17.1705V26H96.7827V24.1847H96.6804C96.4702 24.5938 96.1889 24.9545 95.8366 25.267C95.4844 25.5739 95.0611 25.8153 94.5668 25.9915C94.0724 26.1619 93.5014 26.2472 92.8537 26.2472ZM93.8935 23.7415C94.4276 23.7415 94.8991 23.6364 95.3082 23.4261C95.7173 23.2102 96.0384 22.9205 96.2713 22.5568C96.5043 22.1932 96.6207 21.7812 96.6207 21.321V19.9318C96.5071 20.0057 96.3509 20.0739 96.152 20.1364C95.9588 20.1932 95.7401 20.2472 95.4957 20.2983C95.2514 20.3437 95.0071 20.3864 94.7628 20.4261C94.5185 20.4602 94.2969 20.4915 94.098 20.5199C93.6719 20.5824 93.2997 20.6818 92.9815 20.8182C92.6634 20.9545 92.4162 21.1392 92.2401 21.3722C92.0639 21.5994 91.9759 21.8835 91.9759 22.2244C91.9759 22.7188 92.1548 23.0966 92.5128 23.358C92.8764 23.6136 93.3366 23.7415 93.8935 23.7415Z"
                  fill="white"
                />
                <rect
                  x="1.5"
                  y="1.5"
                  width="136"
                  height="31"
                  stroke="white"
                  strokeWidth="3"
                />
              </svg>
            </Link>
            <div className="header_content_search">
              <input type="text" placeholder="busque aqui o seu produto" />
              {haveUser && (
                <div
                  className="header_user"
                  onClick={() => setIsClick(!isClick)}
                >
                  <div className="name_user_header_icon">
                    {dataUser.name.charAt(0).toUpperCase()}
                  </div>
                  <span>{dataUser.name}</span>
                  <div
                    className="box_user_header_icon"
                    style={{ display: isClick ? "flex" : "none" }}
                  >
                    <span
                      className="box"
                      onClick={() => navigation("/orders")}
                    >
                      meus pedidos
                    </span>
                    <span
                      className="box"
                      onClick={() => navigation("/produtoscadastrados")}
                    >
                      produtos cadastrados
                    </span>
                    <span
                      className="box"
                      onClick={() => navigation("/cadastroproduct")}
                    >
                      cadastrar produto
                    </span>
                    <span
                      className="box"
                      onClick={() => {
                        localStorage.clear()
                        window.location.reload()
                      }}
                    >
                      sair
                    </span>
                  </div>
                </div>
              )}
              {!haveUser && (
                <div
                  className="header_user_login"
                  onClick={() => navigation("/login")}
                >
                  <BiUserCircle className="header_icon_user" />
                  <span>faça seu login ou cadastre-se</span>
                </div>
              )}
              <Link to="/carrinho" style={{ color: "white" }}>
                <div className="header_icon_cart_container">
                  <span>{cart}</span>
                  <BiCartAlt className="header_icon_cart" />
                </div>
              </Link>
            </div>
          </div>
          <div className="header_departaments">
            <span>frete grátis para todo brasil</span>
            <div>
              <span>trabalhe aqui</span>
              <span>seja parceiro</span>
              <span>nosso time</span>
              <span>cartão delta</span>
              <span>promoções</span>
              <span onClick={() => navigation("/cadastroproduct")}>
                venda aqui
              </span>
              <span>cupons</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
