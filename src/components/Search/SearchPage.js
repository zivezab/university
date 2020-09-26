import React, {useState} from 'react';
import SearchInput from './SearchInput';
import UniversityCards from './../UniversityCards';
import exportJSONFile from './../ExportJSON';

const UNIVERSITY_URL = 'http://universities.hipolabs.com/search';

const SearchPage = () => {
  const [keyword, setKeyword] = useState('');
  const [country, setCountry] = useState('');
  const [universityList, setUniversityList] = useState([]);
  const [showError, setShowError] = useState(false);
  const [disableInput, setDisableInput] = useState(false);

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

  return (
    <>
      <SearchInput
        onKeywordChange={onKeywordChange}
        onCountryChange={onCountryChange}
        onSubmit={fetchData}
        exportData={() => {
          exportJSONFile(universityList);
        }}
        disabled={disableInput}
      />
      <UniversityCards universityList={universityList} showError={showError} />
    </>
  );
};

export default SearchPage;
