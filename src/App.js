/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import "./App.css";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovies from "./components/FeaturedMovie.js/FeaturedMovies";
import Header from "./components/Header";

export default (params) => {
  const [movieList, setMovielist] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlacHeader] = useState(false) // para aparececer ou não a barra preta 

  useEffect(() => {
    //useEffect quando a tela for recarregada executar a função
    const loadAll = async () => {
      // pegando a lista total
      let list = await Tmdb.getHomeList();
      // console.log("jessica teste", list);

      setMovielist(list);
      //=PEGANDO O FEATURED
      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );

      let chosen = originals[0].items.results[randomChosen];
       let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
       setFeaturedData(chosenInfo)

      // console.log(chosenInfo);
    };
    loadAll();
  }, []);

useEffect(()=>{ 
  // para aparececer ou não a barra preta 

 const scrollListener =()=>{
  if(window.scrollY > 10) {
    setBlacHeader (true)

    }else{
      setBlacHeader (false)

    }
  }

 
 window.addEventListener('scroll', scrollListener)
 return()=>{
  window.removeEventListener('scroll', scrollListener)
 }


}, []);



  return (
    <div className="page">
      <Header black={blackHeader}/>
      {featuredData && <FeaturedMovies item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        Feito por Jessica <span role="img" aria-label="tecnologia">👩‍💻</span><br/>
        Learning React<br/>
          Direitos de imagem para Netflix

      </footer>
    </div>
  );
};
