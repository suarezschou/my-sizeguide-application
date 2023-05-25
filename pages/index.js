'use client'
import Image from 'next/image'
import { Inter, Assistant} from 'next/font/google'
import { useState } from 'react';
import ClothingSize from '../components/clothingsize.js';
import Lottie from "lottie-react"
import animationData from "../public/20777-yellow-measuring-tape-in-isometric-style.json"

const inter = Inter({ subsets: ['latin'] })
const assistant = Assistant({ subsets: ['latin'] })

const style = {
  height: 300,
};

const interactivity = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.2],
      type: "stop",
      frames: [0],
    },
    {
      visibility: [0.2, 0.45],
      type: "seek",
      frames: [0, 45],
    },
    {
      visibility: [0.45, 1.0],
      type: "loop",
      frames: [45, 60],
    },
  ],
};

export default function Home() {
  const [inputs, setInput] = useState({});

  const handleChange = (event) => {
    const sizeA = event.target.name;
    const sizeB = event.target.value;
    setInput(values => ({...values, [sizeA]:sizeB}))
  }

  const handleSubmit = (event)=> {
    event.preventDefault();
    console.log(inputs);
  }
  return (
    <main>
      <h1 className='text-assistant text-center text-5xl py-10 text-teal-700'>
      Size-guide
    </h1>

    <div className="flex justify-center">
      <Lottie animationData={animationData}
      style={style}
      interactivity={interactivity} />
    </div>
    
    <form className='h-screen flex flex-col items-center justify center' onSubmit={handleSubmit}>
        <label className='text-2xl py-10 text-black'>Enter bust in cm:
          <div>
          <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert py-5"
          src="/drawing.svg"
          alt="measuring tape on breast"
          width={180}
          height={37}
          priority
        />
          </div>

          <input className='border-2 border-black'
            type="number"
            name="size_a"
            value={inputs.size_a || ""}
            onChange={handleChange}
            />
        </label>
        <br></br>
        <label className='text-2xl py-10 text-black'>Enter under bust in cm:
          <div>

            <Image
          className="items-center relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert py-5"
          src="/drawing2.svg"
          alt="measuring tape under breast"
          width={180}
          height={37}
          priority
        />
          </div>

          <input className='border-2 border-black'
            type="number"
            name="size_b"
            value={inputs.size_b || ""}
            onChange={handleChange}
            />
        </label>
        <br></br>
        <label className='text-2xl py-10 text-black'>Enter waist in cm:
          <div>

          <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert py-5"
          src="/drawing3.svg"
          alt="measuring tape on waist"
          width={180}
          height={37}
          priority
        />
          </div>

          <input className='border-2 border-black'
            type="number"
            name="size_c"
            value={inputs.size_c || ""}
            onChange={handleChange}
            />
        </label>
      
        <ClothingSize inputs={inputs}/>
      </form>
    </main>
  )
}
