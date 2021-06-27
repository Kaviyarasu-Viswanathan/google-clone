import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";
import useGoogleSearch from "../../useGoogleSearch";
import { TextFormatRounded } from "@material-ui/icons";
// my api key AIzaSyAXDs_RT9qH0oUFlxxM3SZO2liUK4yq-cY

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  console.log(data);
  return (
    <div classname="searchPage">
      <div className="searchPage__header">
        <h1>{term}</h1>
      </div>
      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
