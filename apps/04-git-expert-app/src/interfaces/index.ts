export interface Gif {
    id: string
    title: string
    images: { downsized_medium: { url: string } }
}

export interface CustomGif {
    id: string
    title: string
    url: string
}