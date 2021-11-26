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
  getMovieInfo: async (movieId, type) => {
    let info = {};
    switch (type) {
      case "movie":
        info = await basicFetch(
          `/movie/${movieId}?language=pt-BR&api_key=${API_KEY} `
        );
        break;
      case "tv":
        info = await basicFetch(
          `/tv/${movieId}?language=pt-BR&api_key=${API_KEY} `
        );

        break;
      default:
        info = null;
        break;
    }
    return info;
  },

  getSimilarMovie: async (movieId) => {
    return [
      {
        slug: "similar",
        title: "Similares",
        items: await basicFetch(
          `/movie/${movieId}/similar?language=pt-BR&api_key=${API_KEY} `
        ),
      },
    ];
  },
  getMovieActors: async (movieId, type) => {
    let actors;
    switch (type) {
      case "movie":
        actors = await basicFetch(
          `/movie/${movieId}/credits?language=pt-BR&api_key=${API_KEY}`
        );
        break;
      case "tv":
        actors = await basicFetch(
          `/tv/${movieId}/credits?language=pt-BR&api_key=${API_KEY}`
        );
        break;
      default:
        actors = null;
        break;
    }

    return actors;
  },

  getFilmesList: async (page = 1) => {
    return [
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}&page=${page}`
        ),
      },
      {
        slug: "adventure",
        title: "Aventura",
        items: await basicFetch(
          `/discover/movie?with_genres=12&language=pt-BR&api_key=${API_KEY}&page=${page}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}&page=${page}`
        ),
      },
      {
        slug: "drama",
        title: "Drama",
        items: await basicFetch(
          `/discover/movie?with_genres=18&language=pt-BR&api_key=${API_KEY}&page=${page}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}&page=${page}`
        ),
      },
      {
        slug: "sciencefiction",
        title: "Ficção científica",
        items: await basicFetch(
          `/discover/movie?with_genres=878&language=pt-BR&api_key=${API_KEY}&page=${page}`
        ),
      },
      {
        slug: "war",
        title: "Guerra",
        items: await basicFetch(
          `/discover/movie?with_genres=10752&language=pt-BR&api_key=${API_KEY}&page=${page}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}&page=${page}`
        ),
      },
    ];
  },
  getSeriesList: async (page = 1) => {
    return [
      {
        slug: "action-adventure",
        title: "Ação e Aventura",
        items: await basicFetch(
          `/discover/tv?with_genres=10759&language=pt-BR&api_key=${API_KEY}&page=${page}`
        ),
      },

      {
        slug: "scifi",
        title: "Sci-Fi & Fantasia",
        items: await basicFetch(
          `/discover/tv?with_genres=10765&language=pt-BR&api_key=${API_KEY}&page=${page}`
        ),
      },
      {
        slug: "drama",
        title: "Drama",
        items: await basicFetch(
          `/discover/tv?with_genres=18&language=pt-BR&api_key=${API_KEY}&page=${page}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(
          `/discover/tv?with_genres=35&language=pt-BR&api_key=${API_KEY}&page=${page}`
        ),
      },
      {
        slug: "family",
        title: "Família",
        items: await basicFetch(
          `/discover/tv?with_genres=10751&language=pt-BR&api_key=${API_KEY}&page=${page}`
        ),
      },
      {
        slug: "war",
        title: "Guerra",
        items: await basicFetch(
          `/discover/tv?with_genres=10768&language=pt-BR&api_key=${API_KEY}&page=${page}`
        ),
      },
      {
        slug: "talk",
        title: "Talk",
        items: await basicFetch(
          `/discover/tv?with_genres=10767&language=pt-BR&api_key=${API_KEY}&page=${page}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentário",
        items: await basicFetch(
          `/discover/tv?with_genres=99&language=pt-BR&api_key=${API_KEY}&page=${page}`
        ),
      },
    ];
  },
};

//genre https://api.themoviedb.org/3/genre/movie/list?api_key=57fa556e7273f4df37aa912447616832&language=en-US
//serie https://api.themoviedb.org/3/genre/tv/list?api_key=57fa556e7273f4df37aa912447616832&language=en-US
