import axios from "axios";

export const fetchMovieList = async (page) => {
  const queryParams = {
    api_key: "73fac9114e69bba5dd12b80ad873c2ef",
    page: page,
  };
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming",
      { params: queryParams }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
