import React, {useState} from 'react';
import SearchInput from './SearchInput';
import UniversityCards from './UniversityCards';

const UNIVERSITY_URL = 'http://universities.hipolabs.com/search';

const SearchPage = (props) => {
  const [keyword, setKeyword] = useState('');
  const [country, setCountry] = useState('');
  const [favoriteList, setFavoriteList] = useState([]);
  const [universityList, setUniversityList] = useState([]);
  const [showError, setShowError] = useState(false);
  const [disableInput, setDisableInput] = useState(false);

  const exportJSONFile = (data) => {
    const dataStr = JSON.stringify(universityList);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(
      dataStr
    )}`;
    const exportFileDefaultName = 'users.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const fetchData = async (e) => {
    e.preventDefault();
    setDisableInput(true);
    try {
      const url = `${UNIVERSITY_URL}?country=${country}&name=${keyword}`;
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
    const newFavList = favList.filter((x) => x.name !== favorite.name);
    setFavoriteList(newFavList);
    localStorage.setItem('Favorites', JSON.stringify(newFavList));
  };

  const addFavorite = async (favorite) => {
    const favList = Array.isArray(favoriteList) ? [...favoriteList] : [];
    favList.push(favorite);
    setFavoriteList(favList);
    localStorage.setItem('Favorites', JSON.stringify(favList));
  };

  const restoreFavorite = async (favorites) => {
    setFavoriteList(favorites);
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
        restoreFavorite={restoreFavorite}
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
