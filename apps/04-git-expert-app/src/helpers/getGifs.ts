import {Gif} from "../interfaces";

export const getGifs = async (category: string) => {
    const apiKey = `g13oXIzvbtzxNnCw6hjWVR31UjL0yGVw`
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url)
    const {data} = await resp.json()

    return data.map((gif: Gif) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        };
    })
}