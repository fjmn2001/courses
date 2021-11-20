import {CustomGif} from "../interfaces";

const GifGridItem = ({title, url}: CustomGif) => {
    return (
        <div>
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem;