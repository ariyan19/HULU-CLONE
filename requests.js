const api_key ='2e223a610898e19c0c49765f623704df';
export default {
    fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
    fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
    fetchActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
    fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
    fetchMystery: `/discover/movie?api_key=${api_key}&with_genres=9648`,
    fetchWestern: `/discover/movie?api_key=${api_key}&with_genres=37`,
    fetchAnimation: `/discover/movie?api_key=${api_key}&with_genres=16`,
    fetchTV: `/discover/movie?api_key=${api_key}&with_genres=10770`,
};
