"use client";
import { useState } from "react";
import Meme from "./components/Meme";
import MemeDisplay from "./components/MemeDisplay";
import NavBar from "./components/NavBar";
import MemesData from "./../../public/MemesData"

function getRandomMeme(){
  const randomIndex = Math.floor(Math.random() * MemesData.data.memes.length)
      return MemesData.data.memes[randomIndex].url
  }

  export default function Home() {
    const [memeImage, setMemeImage] = useState(""); 
    function RandomMeme(){
      setMemeImage(getRandomMeme())
      return memeImage
    }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" border-slate-500">
        <NavBar />
        <Meme />
        <button onClick={() => RandomMeme()} className="w-[470px] h-[40px] rounded-md bg-gradient-to-r from-[#672280] to-[#A626D3] text-white font-medium p-[4px]">Get a new meme image  🖼</button>
        <MemeDisplay  url = { memeImage } />
      </div>
    </main>
  )
}
