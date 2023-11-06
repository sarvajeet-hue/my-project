
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../Hooks/useGif';


const Tag = () => {
  const [tag, setTag] = useState('car')

  
  const {gif , loader , fetchData} = useGif(tag);
  

  
  

  


  function changeHandler(event) {
    setTag(event.target.value);
  }

  function clickHandler() {
    fetchData(tag);
  }

  return (
    <div className='bg-pink-500 border border-black rounded flex flex-col items-center w-1/2 m-[30px]'>
      <h1 className='font-bold text-lg '>Random Gif {tag}</h1>
      {
        loader ? (<Spinner />) : (<img src={gif} width={350} />)
      }
      <input className='w-10/12 rounded-lg border px-6 text-center'
        type="text"
        onChange={changeHandler}
        value={tag} />
      <button onClick={clickHandler} className='bg-yellow-300 m-3 w-10/12 font-bold p-2 rounded-lg border px-6'>Generate</button>
    </div>
  )
}

export default Tag 