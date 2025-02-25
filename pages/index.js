'use client'
import Image from 'next/image'
import { Inter} from 'next/font/google'
import { useState } from 'react';
import ClothingSize from '../components/clothingsize.js';


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [inputs, setInput] = useState({});
  const [showSize, setShowSize] = useState(false);

  const handleChange = (event) => {
    const sizeA = event.target.name;
    const sizeB = event.target.value;
    setInput(values => ({...values, [sizeA]:sizeB}))
  }

  const handleSubmit = (event)=> {
    event.preventDefault();
    setShowSize(true);
    console.log(inputs);
  }

  return (
    <main>
      <h1 className='text-center text-5xl py-10 text-orange-500'>
      Size-guide
    </h1>

    
    <form className='h-screen flex flex-col items-center justify center' onSubmit={handleSubmit}>
        <label className='text-2xl py-10'>Enter bust in cm:
          
          <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert py-5"
          src="/drawing.svg"
          alt="measuring tape on breast"
          width={200}
          height={37}
          priority
        />
          

          <input className='text-black'
            type="number"
            name="size_a"
            value={inputs.size_a || ""}
            onChange={handleChange}
            
            />
        </label>
        <br></br>
        <label className='text-2xl py-10'>Enter under bust in cm:
          

            <Image
          className="items-center relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert py-5"
          src="/drawing2.svg"
          alt="measuring tape under breast"
          width={200}
          height={37}
          priority
          
        />
          

          <input className='text-black'
            type="number"
            name="size_b"
            value={inputs.size_b || ""}
            onChange={handleChange}
            
            />
        </label>
        <br></br>
        <label className='text-2xl py-10 '>Enter waist in cm:
          

          <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert py-5"
          src="/drawing3.svg"
          alt="measuring tape on waist"
          width={200}
          height={37}
          priority
        />
          

          <input className='text-black' 
            type="number"
            name="size_c"
            value={inputs.size_c || ""}
            onChange={handleChange}
            />
        </label>

      <div className='grid grid-flow-col justify-between gap-5 p-5'>
        <button type="submit" className="bg-orange-500 hover:bg-green-600 text-black font-bold p-5 rounded">
          Calculate Size
        </button>
        
          {showSize && <ClothingSize inputs={inputs} />} 
        
        </div>
      </form>
    </main>
  )
}
