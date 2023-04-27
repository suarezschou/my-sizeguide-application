import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react';
import ClothingSize from '../components/clothingsize.js';

const inter = Inter({ subsets: ['latin'] })

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
      <h1 className='text-center text-5xl py-10 text-teal-800'>
      Size-guide
    </h1>
    
    <form className='h-screen flex flex-col items-center justify center' onSubmit={handleSubmit}>
        <label className='text-2xl py-10 text-teal-800'>Enter size A bryst:
          <div>
          <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
          </div>
          <input
            type="number"
            name="size_a"
            value={inputs.size_a || ""}
            onChange={handleChange}
            />
        </label>
        <br></br>
        <label className='text-2xl py-10 text-teal-800'>Enter size B underbryst:
          <div>

            <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
          </div>
          <input
            type="number"
            name="size_b"
            value={inputs.size_b || ""}
            onChange={handleChange}
            />
        </label>
        <br></br>
        <label className='text-2xl py-10 text-teal-800'>Enter size C talje:
          <div>

          <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
  
          </div>
          <input
            type="number"
            name="size_c"
            value={inputs.size_c || ""}
            onChange={handleChange}
            />
        </label>
      
        <ClothingSize inputs={inputs} />
      </form>
    </main>
  )
}
