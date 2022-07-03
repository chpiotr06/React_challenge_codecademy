import React from "react";
import { Tile } from "./../tile/Tile"

export const TileList = ({ contacts }) => {
  return (
    <div>
      {
        contacts.map((contact, index) => {
          return <Tile key={index} tile={contact}/>
        })
      }
    </div>
  );
};
