
import React, { useState } from 'react'
import useGif from '../Hooks/useGif';
import Spinner from './Spinner';



const Random = () => {
    console.log("0th step")

    const {gif , loader , fetchData} = useGif();
    console.log(loader)
    console.log(gif)
    
    console.log('third step ')


    function clickHandler() {
        fetchData();
    }

    return (
        <div className='bg-green-500 border border-black rounded flex flex-col items-center w-1/2  max-h-6 m-[30px]'>
            <h1 className='font-bold text-lg '>A Random Gif {console.log('4th step')}</h1>
            {
                loader ? (<Spinner/>) : (<img src={gif} width={250}  height={200}/>)
            }
            
            <button onClick={clickHandler} className='bg-yellow-300 m-3 w-10/12 font-bold p-2 rounded-lg border px-6'>Generate</button>

        </div>
    )
}

export default Random
