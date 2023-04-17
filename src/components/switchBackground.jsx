import React, { useState, useEffect } from "react";
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

/* --- Switching Background Function --- */

export function BckgSwitch() {
  const [currentBackground, setBackground] = useState(backgrounds[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * backgrounds.length);
      setBackground(backgrounds[index]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
        zIndex: "-1",
      }}
    >
    </div>
  );
}
