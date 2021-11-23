import {CustomGif} from "../interfaces";
import GifGridItem from "./GifGridItem";
import {useFetchGifs} from "../hooks/useFetchGifs";

interface GifGridProps {
    category: string
}

const GifGrid = ({category}: GifGridProps) => {

    const {data: images, loading} = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>

            {loading && <p>Loading</p>}

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