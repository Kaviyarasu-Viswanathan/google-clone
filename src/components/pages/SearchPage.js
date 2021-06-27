import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";
import useGoogleSearch from "../../useGoogleSearch";
import { TextFormatRounded } from "@material-ui/icons";
import { Response } from "../../response";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  console.log(data);
  return (
    <div className="searchPage">
      {/*<h1>This is search page WoW!!!!!</h1>*/}
      <div className="searchPage_header">
        <Link to="/">
          <img
            className="searchPage_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
            alt=""
          />
        </Link>
        <div className="searchPage_headerBody">
          <Search hideButtons />
          <div className="searchPage_options">
            {/*--------searchPage_optionsLeft--------------*/}
            <div className="searchPage_optionsLeft">
              <div className="searchPage_option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage_option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage_option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage_option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage_option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage_option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>

            {/*--------searchPage_optionsRight--------------*/}
            <div className="searchPage_optionsRight">
              <div className="searchPage_option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage_option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchPage_results">
          <p className="searchPage_resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage_result">
              {/* eslint-disable-next-line react/jsx-no-target-blank */}

              {/* eslint-disable-next-line react/jsx-no-target-blank */}
              <a
                className="searchPage_resultTitle"
                href={item.link}
                target="_blank"
              >
                <h3>{item.title}</h3>
              </a>
              <p className="searchPage_resultSnippet">{item.snippet}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
