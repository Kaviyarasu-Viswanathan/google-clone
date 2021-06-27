import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

function Search({ hideButtons = false }) {
  const [input, setInput] = useState("");
  const history = useHistory();
  const [{}, dispatch] = useStateValue();

  const search = (e) => {
    e.preventDefault();
    console.log("you hit the button >>> ", input);
    history.push("/search");
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term:input
    });
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon className="search__inputIcon" />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} varient="outlined">
            Google Search
          </Button>
          <Button>I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            type="submit"
            onClick={search}
            varient="outlined"
            className="search__buttons-hidden"
          >
            Google Search
          </Button>
          <Button className="search__buttons-hidden" varient="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
