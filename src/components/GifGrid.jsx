//import { useEffect, useState } from "react";
//import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = (props) => {
  const { category } = props;

  const { images, isLoading } = useFetchGifs(category);
  return (
    <>
      <div>
        <h2>Resultados de: {category}</h2>
        {
          isLoading ? <h2>Cargando...</h2> : null
        }
        
        <div className="card-grid">
          {
          images.map(img => (
            <GifItem
              key={img.id}
              {...img}
            />
          ))
          }
        </div>
      </div>
    </>
  );
};
