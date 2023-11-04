import React, {useEffect, useState} from 'react';
import axios from 'axios';
import WatchScreenUI from './WatchScreenUI';
import Images from '../../assets/Images';
import constants from '../../assets/Constants/constants';

const WatchScreenComponent = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState(0);
  const [loader, setLoader] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getMovieList();
  }, [page]);

  const getMovieList = async () => {
    const queryParams = {
      api_key: '73fac9114e69bba5dd12b80ad873c2ef',
      page: page,
    };
    setLoader(true);
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/upcoming',
        {params: queryParams},
      );
      setMovieList(prevMovies => [...prevMovies, ...response.data.results]);
      setLoader(false);
      setTotalMovies(response.data.total_results);
    } catch (error) {
      setLoader(false);
      console.error(error);
    }
  };

  const handleSubmit = val => {
    setShowResult(val);
  };

  const movieGenres = [
    {image: Images.iconCommedy, title: constants.COMMEDIES, id: 1},
    {image: Images.iconCrime, title: constants.CRIME, id: 2},
    {image: Images.iconFamily, title: constants.FAMILY, id: 3},
    {image: Images.iconDocumentry, title: constants.DOCUMENTRIES, id: 4},
    {image: Images.iconDramas, title: constants.DRAMAS, id: 5},
    {image: Images.iconFantasy, title: constants.FANTASY, id: 6},
    {image: Images.iconHoliday, title: constants.HOLIDAYS, id: 7},
    {image: Images.iconHorror, title: constants.HORROR, id: 8},
    {image: Images.iconScifi, title: constants.SCIFI, id: 9},
    {image: Images.iconThriller, title: constants.THRILLER, id: 10},
  ];

  const searchResult = [
    {
      image: Images.iconTimless,
      title: constants.TIMLESS,
      secondaryText: constants.FANTASY,
      id: 1,
    },
    {
      image: Images.iconInTime,
      title: constants.IN_TIME,
      secondaryText: constants.SCIFI,
      id: 2,
    },
    {
      image: Images.iconTimeToKill,
      title: constants.A_TIME_TO_KILL,
      secondaryText: constants.CRIME,
      id: 3,
    },
  ];

  const onSearch = val => {
    setSearchText(val);
  };

  const nextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSearchBar = val => {
    setPage(1);
    setSearchText('');
    setShowResult(false);
    setShowSearchBar(val);
  };

  return (
    <WatchScreenUI
      movieList={movieList}
      nextPage={nextPage}
      totalMovies={totalMovies}
      loader={loader}
      page={page}
      showSearchBar={showSearchBar}
      onSearch={onSearch}
      searchText={searchText}
      handleSearchBar={handleSearchBar}
      movieGenres={movieGenres}
      searchResult={searchResult}
      onSubmitEditing={handleSubmit}
      showResult={showResult}
    />
  );
};

export default WatchScreenComponent;
