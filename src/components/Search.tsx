import Card from "./Card";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getProductByTag } from "../lib/api";

const Search = () => {
  const { search } = useLocation();
  const [valueResult, setValueResult] = useState<any>();
  const [imgResult, setimgResult] = useState<any>();
  const [loading, setLoading] = useState(true);
  const query = React.useMemo(() => new URLSearchParams(search), [search]);

  const requestProducts = async () => {
    const request: any = await getProductByTag(query.get("input") as string);
    setValueResult(request.userModel);
    setimgResult(request.imgBg);
    setLoading(false);
  };

  useEffect(() => {
    requestProducts();
  }, [search]);

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

  return (
    <div className="container search_container">
      <span className="serach_title">{query.get("input")}</span>
      <div className="img_search">
        <img src={imgResult} alt="img recomendation" />
      </div>
      <div className="search_card">
        {valueResult.map(({ img, preco, id, title }: any) => (
          <Card key={id} img={img} preco={preco} id={id} title={title} />
        ))}
      </div>
    </div>
  );
};

export default Search;
