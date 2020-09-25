import React, { useState } from "react";
import SearchInput from "./SearchInput";
import UniversityCards from "./UniversityCards";

const SearchPage = (props) => {
  const [keyword, setKeyword] = useState("");
  const [country, setCountry] = useState("");
  const [favoriteList, setFavoriteList] = useState();
  const [universityList, setUniversityList] = useState();
  const [showError, setShowError] = useState(false);
  const [disableInput, setDisableInput] = useState(false);

  const exportJSONFile = (data) => {
    let dataStr = JSON.stringify(universityList);
    let dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
    let exportFileDefaultName = "users.json";

    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

  const fetchData = async (e) => {
    e.preventDefault();
    setDisableInput(true);
    try {
      let url =
        "http://universities.hipolabs.com/search?country=" +
        country +
        "&name=" +
        keyword;
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setUniversityList(data);
        });
    } catch (error) {
      setShowError(true);
    }
    setDisableInput(false);
  };

  const onKeywordChange = async (keyword) => {
    setKeyword(keyword);
  };

  const onCountryChange = async (country) => {
    setCountry(country);
  };

  const removeFavorite = async (favorite) => {
    const favList = Array.isArray(favoriteList) ? [...favoriteList] : [];
    setFavoriteList(favList.filter((obj) => obj.name !== favorite.name));
  };

  const addFavorite = async (favorite) => {
    const favList = Array.isArray(favoriteList) ? [...favoriteList] : [];
    favList.push(favorite);
    setFavoriteList(favList);
  };

  return (
    <>
      <SearchInput
        onKeywordChange={onKeywordChange}
        onCountryChange={onCountryChange}
        onSubmit={fetchData}
        exportData={exportJSONFile}
        disabled={disableInput}
      />
      <UniversityCards
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
        universityList={universityList}
        showError={showError}
        favoriteList={favoriteList}
      />
    </>
  );
};

export default SearchPage;
