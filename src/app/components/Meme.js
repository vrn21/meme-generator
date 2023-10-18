'use client';
import MemeDisplay from "./MemeDisplay"



export default function Meme () {
    return (
      <div>
            <div className=" flex flex-col items-center">
                <div className="flex flex-row justify-normal p-7">
                    <div className="p-2">
                        <input className="w-[200px] ml-2 text-base rounded-md border border-slate-500 p-1 " type="text" placeholder="shut up"/>
                    </div>
                    <div className="p-2">
                        <input className="w-[200px] ml-2 text-base rounded-md border border-slate-500 p-1 " type="text" placeholder="and take my money"/>
                    </div>
                </div>
            </div>

      </div>
    )
  }

