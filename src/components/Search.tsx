import Card from "./Card";
import Img from "../img/searchRecomd.png";
import { useLocation } from "react-router-dom";
import React from "react";

const Search = () => {
  const { search } = useLocation();
  const query = React.useMemo(() => new URLSearchParams(search), [search]);
  return (
    <div className="container search_container">
      <span className="serach_title">{query.get("input")}</span>
      <div className="img_search">
        <img src={Img} alt="img recomendation" />
      </div>
      <div className="search_card">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Search;
