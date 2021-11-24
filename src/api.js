const API_KEY = "57fa556e7273f4df37aa912447616832";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "popular",
        title: "Populares",
        items: await basicFetch(
          `/movie/popular?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "toprated",
        title: "Em alta",
        items: await basicFetch(
          `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "upcoming",
        title: "Lançamentos",
        items: await basicFetch(
          `/movie/upcoming?language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },
  getMovieInfo: async (movieId) => {
    let info = {};
    info = await basicFetch(
      `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}&page=1 `
    );

    return info;
  },

  getFilmesList: async () => {
    return [
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "adventure",
        title: "Aventura",
        items: await basicFetch(
          `/discover/movie?with_genres=12&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "drama",
        title: "Drama",
        items: await basicFetch(
          `/discover/movie?with_genres=18&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "sciencefiction",
        title: "Ficção científica",
        items: await basicFetch(
          `/discover/movie?with_genres=878&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "war",
        title: "Guerra",
        items: await basicFetch(
          `/discover/movie?with_genres=10752&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },
};

//genre https://api.themoviedb.org/3/genre/movie/list?api_key=57fa556e7273f4df37aa912447616832&language=en-US
