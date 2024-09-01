import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  // const [gif, setGif] = useState("");
  // const [loader, setLoader] = useState(false);
  

  // async function fetchData()
  // {
  //   setLoader(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const {data} =await axios.get(url); //Promise return krta hai
  //   const imageSource = data.data.images.downsized_large.url;
  //   console.log(imageSource);
  //   setGif(imageSource)
  //   setLoader(false);
  // }

  // useEffect( () => {
  //   fetchData();
  // },[])

  const {gif, loader, fetchData} = useGif();

  return (
    <div className="w-1/2 bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      {/* Heading  */}
      <h1 className="uppercase mt-[15px] text-2xl underline font-bold">A Random Gif</h1>
      {/* generating random gif */}
      {
        loader ? (<Spinner/>) : (<img src={gif} width="350" />)
      }
      {/* generate button for generate random gif */}
      <button
        className="w-10/12 bg-stone-100 rounded-lg text-2xl uppercase py-2 mb-[20px]"
        onClick={() => fetchData()}
      >
        Generate
      </button>
    </div>
  );

};

export default Random;
