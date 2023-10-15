import MemesData from "../../../public/MemesData"


function getRandomMeme(){
    const randomIndex = Math.floor(Math.random() * MemesData.data.memes.length)
    return MemesData.data.memes[randomIndex].url
}
const MemeDisplay = () =>{
    return(
        <div>
            <SingleMeme />
        </div>
    )
}

const SingleMeme = () => {
    const url = getRandomMeme()
    return (
        <div className="rounded-sm">
            <img className = "w-[400px] mt-5 ml-auto mr-auto " src={url} />
        </div>
    )
}

export default MemeDisplay