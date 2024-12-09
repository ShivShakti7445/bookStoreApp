import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import {Link} from 'react-router-dom'
import axios from 'axios'



export default function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
     <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
       <div className='mt-28 items-center justify-center text-center'>
            <h1 className=' text-2xl md:text-4xl'>
               We're delighted to have you <span className='text-pink-500'> Here ! :)</span>
            </h1>
            <p className='mt-12'>
                Welcome to your literary haven, where stories come alive and knowledge knows no bounds! Whether you're here to explore the latest bestsellers, uncover hidden literary gems,
                or lose yourself in the classics, we promise an enchanting journey. From thought-provoking nonfiction to thrilling novels and heartwarming tales, our carefully curated collection is
                designed to ignite your imagination. Sit back, grab a cup of coffee, and let the joy of reading whisk you away to countless adventures. Let’s make your next great story begin today!
            </p>
            <Link to=   "/">
                <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 '>
                    Back 
                </button>
            </Link>
       </div>
       <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {book.map((item)=>(
                    <Cards item ={item} key={item.id}/>
            ))}
       </div>
     </div> 
    </>
  )
}

