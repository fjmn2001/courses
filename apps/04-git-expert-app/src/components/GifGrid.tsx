import {CustomGif} from "../interfaces";
import GifGridItem from "./GifGridItem";
import {useFetchGifs} from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

interface GifGridProps {
    category: string
}

const GifGrid = ({category}: GifGridProps) => {

    const {data: images, loading} = useFetchGifs(category)

    return (
        <>
            <h3 className={'animate__animated animate__fadeIn'}>{category}</h3>

            {loading && <p className={'animate__animated animate__flash'}>Loading</p>}

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

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;
