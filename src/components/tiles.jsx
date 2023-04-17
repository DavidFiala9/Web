import React, { useState } from "react";
import "../index.css";

/* --- Tile Array --- */

const TILE_DATA = [
  {
    id: "tile_1",
    title: "Lord of the Rings",
    text: "Fantasy",
    expanded: "expanded_1",
    type: "tile"
  },
  {
    id: "tile_2",
    title: "Whiplash",
    text: "Drama",
    expanded: "expanded_2",
    type: "tile"
  },
  {
    id: "tile_3",
    title: "The Matrix",
    text: "Sci-fi",
    expanded: "expanded_3",
    type: "tile"
  },
  {
    id: "tile_4",
    title: "Alien",
    text: "Horror",
    expanded: "expanded_4",
    type: "tile"
  },
  {
    id: "tile_5",
    title: "Interstellar",
    text: "Sci-fi",
    expanded: "expanded_5",
    type: "tile"
  },
  {
    id: "tile_6",
    title: "Schindler's list",
    text: "Historical",
    expanded: "expanded_6",
    type: "tile"
  },
];

/* --- Converting Tile Array onto Page --- */

const Tile = ({ id, title, text, expanded, type }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      className={`${id} ${type} ${hovering ? expanded : ""}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {!hovering && <h2>{title}</h2>}
      {hovering && <p>{text}</p>}
    </div>
  );
};

/* --- Rendering Tiles --- */

export function Tiles() {
  return (
    <div className="tiles">
      { TILE_DATA.map( ( tile ) => ( < Tile key={ tile.id } { ...tile } /> ) ) }
    </div>
  );
}