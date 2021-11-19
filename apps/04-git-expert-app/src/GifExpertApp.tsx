import {useState} from "react";

const GifExpertApp = () => {
    const [categories, setCategories] = useState([
        'One Punch',
        'Samurai X',
        'Dragon Ball'
    ])

    const handleAdd = () => {
        const randomString = (Math.random() + 1).toString(36).substring(7);
        setCategories([...categories, ...[randomString]])
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>

            <button onClick={handleAdd}>Add</button>

            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
        </>
    )
}

export default GifExpertApp