/* eslint-disable import/no-anonymous-default-export */
const API_KEY = '92b940760d60e6eae85525dc7432cceb';
const API_BASE = 'https://api.themoviedb.org/3';

// eslint-disable-next-line import/no-anonymous-default-export

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};
// funcçao que manda o endpoint, que vai requisitar e devolve o resultado

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix", 
        items: await basicFetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
        ),
        // vai pegar os seriados originais da neftlix
      },
      {
        slug: "trending",
        title: "Recomendados para você",
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY} `),
      },
      {
        slug: "toprated",
        title: "Em alta",
        items: await basicFetch(`/movie/top_rated?language+pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch (`/discover/movie?with_generes=28&language=pt-BR&api_key=${API_KEY}`) ,
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch (`/discover/movie?with_generes=35&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch (`/discover/movie?with_generes=27&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch (`/discover/movie?with_generes=10749&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await basicFetch (`/discover/movie?with_generes=99&language=pt-BR&api_key=${API_KEY}`),
      },
    ];
  },
  getMovieInfo: async (movieId, type) =>{
    let info ={};

    if(movieId){
      switch (type){
        case 'movie':
          info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)

        break;
        case 'tv':
          info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)


        break;
        default:
          info =null;
          break;

      }
    }
    return info
  }
};
