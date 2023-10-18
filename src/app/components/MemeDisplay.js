"use client";

const MemeDisplay = (prop) => {
    return (
        <div className="rounded-sm">
            <img className = "w-[400px] mt-5 ml-auto mr-auto " src={prop.url} />
        </div>
    )
}

export default MemeDisplay 