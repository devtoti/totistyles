import Image from 'next/image'
import pic01 from '../public/toti1.jpg'
import pic02 from '../public/toti2.jpg'
import pic03 from '../public/toti3.jpg'
import pic04 from '../public/toti4.jpg'
import { useState, useEffect } from 'react'

const images = [
    { src: pic01, type: "commercial" },
    { src: pic02, type: "fitness" },
    { src: pic03, type: "editorial" },
    { src: pic04, type: "fashion" },
    { src: pic04, type: "fashion" },
    { src: pic04, type: "fashion" },
]
const bubbles = ["commercial", "fitness", "editorial", "fashion"]

function handleClick(li, setGallery, filterSearch) {
    if (!filterSearch) {
        let filteredGallery = [];
        filteredGallery = images.filter(img => img.type == li)
        setGallery(filteredGallery)
    } else {
        setGallery(images)
    }
}


export default function Gallery() {
    const [gallery, setGallery] = useState(images)
    const [filterSearch, setFilterSearch] = useState(false)

    useEffect(() => {
        console.log(filterSearch)
        setFilterSearch(c => !c)
    }, [gallery])


    const mapBubbles = bubbles.map((bubble, id) => {
        return <li className="list-bubbles" key={id + 1} name={bubble} onClick={() => handleClick(bubble, setGallery, filterSearch)}
        >
            <button>

        {bubble}
            </button>
        </li>
    })
    const mapImgs = gallery.map((image, id) => {
        // console.log(image);
        return <div className="gallery-img" key={id} onClick={()=> console.log(<Image src={pic01}/>)}>
            <Image src={image.src}
                width={100}
                height={100}
                id={id}
            />
        </div>
    })

    return (
        <div className="gallery">
            <div className="gallery-header">
                <h3>Gallery</h3>
                <ul>
                    {mapBubbles}
                </ul>
            </div>
            <div className="gallery-container" style={{float:"right"}}>

                {mapImgs}

            </div>
        </div>
    )
}
