import React, { useState, useEffect, useRef } from "react";
import "../index.css";

/* --- Background Array --- */

const backgrounds = [
  "https://wallpapercave.com/wp/wp5406172.jpg", //Star Wars
  "https://wallpaperset.com/w/full/e/8/e/525604.jpg", //Lord of the Rings
  "https://getwallpapers.com/wallpaper/full/7/0/0/20790.jpg", //Pulp Fiction
  "https://images.hdqwalls.com/wallpapers/terminator-2-judgment-day-poster-4k-a6.jpg", //Terminator
  "https://images.alphacoders.com/640/640390.jpg", //Saving Private Ryan
  "https://images2.alphacoders.com/676/676237.jpg", //Whiplash
  "https://images6.alphacoders.com/650/thumb-1920-650608.jpg", //Forest Gump
  "https://images3.alphacoders.com/626/thumb-1920-626354.jpg", //Schindler's list
  "https://cdn.wallpapersafari.com/44/1/zMWGcf.jpg", //Twelve Angry Men
  "https://images3.alphacoders.com/118/thumb-1920-1185634.jpg", //The Batman
  "https://www.wallpaperflare.com/static/580/391/793/the-matrix-movies-neo-keanu-reeves-wallpaper.jpg", //Matrix
  "https://wallpapercave.com/wp/wp7992734.jpg", //Alien
  "https://wallpaperaccess.com/full/1469573.jpg", //Bohemian Rhapsody
  "https://rare-gallery.com/uploads/posts/572045-interstellar.jpg", //Interstellar
  "https://wallpapercave.com/wp/wp3535949.jpg", //Grand Budapest Hotel
];

/* --- Tile Array --- */

const TILE_DATA = [
  {
    id: "tile_1",
    title: "Lord of the Rings",
    text: "Fantasy",
    expanded: "expanded_1",
  },
  {
    id: "tile_2",
    title: "Whiplash",
    text: "Drama",
    expanded: "expanded_2",
  },
  {
    id: "tile_3",
    title: "The Matrix",
    text: "Sci-fi",
    expanded: "expanded_3",
  },
  {
    id: "tile_4",
    title: "Alien",
    text: "Horror",
    expanded: "expanded_4",
  },
  {
    id: "tile_5",
    title: "Interstellar",
    text: "Sci-fi",
    expanded: "expanded_5",
  },
  {
    id: "tile_6",
    title: "Schindler's list",
    text: "Historical",
    expanded: "expanded_6",
  },
];

/* --- Converting Tile Array into Page --- */

const Tile = ({ id, title, text, expanded }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      className={`${id} ${hovering ? expanded : ""}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {!hovering && <h2>{title}</h2>}
      {hovering && <p>{text}</p>}
    </div>
  );
};

/* --- Switching Background Function --- */

function App() {
  const [currentBackground, setBackground] = useState(backgrounds[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const index = backgrounds.indexOf(currentBackground);
      setBackground(backgrounds[(index + 1) % backgrounds.length]);
    }, 10000);
    return () => clearInterval(interval);
  }, [currentBackground]);

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${currentBackground})`,
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {TILE_DATA.map((tile) => (
        <Tile key={tile.id} {...tile} />
      ))}
    </div>
  );
}

export default App;
