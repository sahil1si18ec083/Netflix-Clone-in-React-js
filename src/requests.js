const requests = [
  {
    url: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    title: "NETFLIX ORIGINALS",
    id: 1
  },
  {
    url: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_network=123`,
    title: "Trending",
    id: 2
  },
  {
    url: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    title: "Top Rated",
    id: 3
  },
  {
    url: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,

    title: "Action Movies",
    id: 4
  },

  {
    url: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
    title: "Comedy Movies",
    id: 5
  },
  {
    url: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
    title: "Horror Movies",
    id: 6
  },

  {
    url: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
    title: "Romance Movies",
    id: 7
  },
  {
    url: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
    title: "Documentaries",
    id: 8
  }
];

export default requests;
