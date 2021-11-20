import {useEffect, useState} from "react";
import {CustomGif} from "../interfaces";
import GifGridItem from "./GifGridItem";
import {getGifs} from "../helpers/getGifs";

interface GifGridProps {
    category: string
}

const GifGrid = ({category}: GifGridProps) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs(category).then(setImages)
    }, [category])

    return (
        <>
            <h3>{category}</h3>
            <div className={'card-grid'}>
                {images.map((gif: CustomGif) => {
                    return <GifGridItem
                        key={gif.id}
                        {...gif} />;
                })}
            </div>
        </>
    )
}

export default GifGrid;