import Image from 'next/image'
import card from '../styles/Card.module.css'
import { useRouter } from 'next/router'

export default function Card(props) {

    const router = useRouter()
    const { src, title, description, type, id, keyword } = props

    function handleClick(data, { id }) {

        router.push({
            pathname: '/projects/[pid]',
            query: {
                pid: data.keyword,
                id: id
            }
        })
    }


    return (
        <div className={card.container} onClick={(e) => handleClick(props, { id })}>
           
                <Image src={src}
                    layout="fill" className="customImg"
                    objectFit="cover"
                    objectPosition="top"
                  
                />
                <div className={card.overlay}>
                    <h3>{title}</h3>
                    <p>{keyword}</p>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        // </div>
    )
}
