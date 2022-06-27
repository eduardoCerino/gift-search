import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';


//un hook es un objeto que retorna algo (en este caso retorna un objeto)
export const useFetchGifs = (category) => {
    const [images,setImages] = useState([])
    const [isLoading, setIsLoading] = useState( true )

    const getImages = async () => {
      const newImages = await getGifs(category)
      setImages (newImages)
      setIsLoading ( false )
    }

    useEffect(()=> {
      getImages()
    },[])

    return {
        images,
        isLoading
    }
}
