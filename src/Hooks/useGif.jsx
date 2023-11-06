
import axios from 'axios';
import { useState, useEffect } from 'react';

const useGif = (tag) => {
    const API_KEY = 'nJL4L2ulNWzuTiY80tPDeDMgTtLulo4w';
    const [loader, setLoader] = useState(false);
    const [gif, setGif] = useState('');
    const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
    console.log('first step')
    console.log('2nd step')

    async function fetchData(tag) {
        setLoader(true)
        console.log(loader);
        const output = await axios.get(tag ? (tagMemeUrl) : (randomMemeUrl));

        const imageSource = output.data.data.images.downsized_large.url;

        setGif(imageSource);
        setLoader(false)
    }
    useEffect(() => {
        fetchData('car');
        console.log('useeffect step')
        
    }, [])
    
    


    return {
        gif, loader, fetchData
    }
}

export default useGif
