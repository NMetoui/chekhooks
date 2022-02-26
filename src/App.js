import "./App.css";
import { useState } from "react";
import React from "react";
import MovieList from "./component/MovieList/MovieList";
import NavBar from "./component/NavBar/NavBar";

function App() {
  const [movies, setMovies] = useState([
    {
      description:
        "An elite squad of Navy SEALs, on a covert mission to transport a prisoner off a CIA black site island prison, are trapped when insurgents attack while trying to rescue the same prisoner.",
      posterurl:
        "https://image.tmdb.org/t/p/w500/3OXiTjU30gWtqxmx4BU9RVp2OTv.jpg",
      name: "One Shot",
      rate: 2,
    },
    {
      description:
        "This time, the rivals team up to help a cowgirl and her brother save their homestead from a greedy land-grabber, and they’re going to need some help! Jerry’s three precocious nephews are all ready for action, and Tom is rounding up a posse of prairie dogs. But can a ragtag band of varmints defeat a deceitful desperado determined to deceive a damsel in distress? No matter what happens with Tom and Jerry in the saddle, it’ll be a rootin’ tootin’ good time!",
      posterurl:
        "https://image.tmdb.org/t/p/w500/muIaHotSaSUQr0KZCIJOYQEe7y2.jpg",
      name: "Tom and Jerry: Cowboy Up!",
      rate: 3,
    },
    {
      description:
        "According to legend, an ominous entity known as the Queen of Spades can be summoned by performing an ancient ritual. Four teenagers summon the Queen of Spades, but they could never imagine the horrors that await them.",
      posterurl:
        "https://image.tmdb.org/t/p/w500/4IKBzVBPLXu9p5cfEfdJjHdlafV.jpg",
      name: "Queen of Spades",
      rate: 1,
    },
    {
      description:
        "Ryder and the pups are called to Adventure City to stop Mayor Humdinger from turning the bustling metropolis into a state of chaos.",
      posterurl:
        "https://image.tmdb.org/t/p/w500/ic0intvXZSfBlYPIvWXpU1ivUCO.jpg",
      name: "PAW Patrol: The Movie",
      rate: 5,
    },
    {
      description:
        "When a young boy contracts a mysterious illness, his mother must decide how far she will go to protect him from terrifying forces in her past.",
      posterurl:
        "https://image.tmdb.org/t/p/w500/4fl6EdtMp6p0RKJgESdFti1J3dC.jpg",
      name: "Son",
      rate: 4,
    },
    {
      description:
        "With his best friend Luca away at school, Alberto is enjoying his new life in Portorosso working alongside Massimo – the imposing, tattooed, one-armed fisherman of few words – who's quite possibly the coolest human in the entire world as far as Alberto is concerned. He wants more than anything to impress his mentor, but it's easier said than done.",
      posterurl:
        "https://image.tmdb.org/t/p/w500/1SyTnaY0wte69oKdqxQLvxPT3hs.jpg",
      name: "Ciao Alberto",
      rate: 6,
    },
    {
      description:
        "The nightmare isn't over as unstoppable killer Michael Myers escapes from Laurie Strode's trap to continue his ritual bloodbath. Injured and taken to the hospital, Laurie fights through the pain as she inspires residents of Haddonfield, to rise up against Myers. Taking matters into their own hands, the Strode women and other survivors form a vigilante mob to hunt down Michael and end his reign of terror once and for all.",
      posterurl:
        "https://image.tmdb.org/t/p/w500/qmJGd5IfURq8iPQ9KF3les47vFS.jpg",

      name: "Halloween Kills",
      rate: 1,
    },
  ]);
  const [searchCondition, setSearchCondition] = useState("");
  const [selectRating, setSelectRating] = useState(0);
  return (
    <div className="App">
      <NavBar
        selectRating={selectRating}
        setSelectRating={setSelectRating}
        setSearchCondition={setSearchCondition}
        setMovies={setMovies}
        movies={movies}
      />
      <MovieList
        selectRating={selectRating}
        movies={movies}
        searchCondition={searchCondition}
      />
    </div>
  );
}

export default App;
