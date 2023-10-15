import Meme from "./components/Meme";
import MemeDisplay from "./components/MemeDisplay";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" border-slate-500">
        <NavBar />
        <Meme />
        <MemeDisplay />
      </div>
    </main>
  )
}
