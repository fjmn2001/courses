import {useEffect, useState} from "react";
import {CustomGif, Gif} from "../interfaces";
import GifGridItem from "./GifGridItem";

interface GifGridProps {
    category: string
}

const GifGrid = ({category}: GifGridProps) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs()
    }, [])

    const getGifs = async () => {
        const apiKey = `g13oXIzvbtzxNnCw6hjWVR31UjL0yGVw`
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
        const resp = await fetch(url)
        const {data} = await resp.json()

        const gifts = data.map((gif: Gif) => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images.downsized_medium.url
            };
        })

        setImages(gifts)
    }

    return (
        <>
            <h3>{category}</h3>
            {images.map((gif: CustomGif) => {
                return <GifGridItem
                    key={gif.id}
                    {...gif}
                />
            })}
        </>
    )
}

export default GifGrid;