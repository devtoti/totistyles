import Image from 'next/image'
import css from '../styles/Gallery.module.css'
import { homegym, newicon, collection } from './imgdata'
import { bodyData } from './bodydata'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ViewGridIcon, ChevronRightIcon, ChevronLeftIcon, XIcon } from '@heroicons/react/outline'

export default function Gallery({ fetch }) {
  const [gridView, setGridView] = useState(false)
  const router = useRouter()



  // const displayBodyData = Object.keys(bodyData).map(key => {
  //   console.log(key, bodyData[key])

  //     let keyToInches = bodyData[key] / 2.54 
  
  //   return <div className={css.measurement}>
  //   <h3>{key}</h3>
  //   <p>{bodyData[key]} {isNaN(keyToInches) ? null : '/ ' + keyToInches.toFixed(1) + '"'}</p>
  //   </div>
  // })

  let galleryCollection = [].concat(homegym, newicon, collection);
  let showGallery = []
  showGallery = galleryCollection.filter((elem, id) => elem.src.includes(fetch))

  const [currImg, setCurrImg] = useState(showGallery[0].src)
  const [counter, setCounter] = useState(6)

  let filteredImgs = showGallery.map((imgSrc, id) =>
    <div key={id} onClick={() => {
      setCurrImg(imgSrc.src)
      setGridView(false)
    }} className={css.thumbs} 
    style={{ width: '50%', height: 'auto', position: 'relative' }}
    >
      <Image src={imgSrc.src}
      layout="fill"
      objectFit="cover"
      objectPosition="top"
      />
    </div>)

  let n = filteredImgs.length
  let modulo = Math.abs(counter % n)
  let nextImg = filteredImgs[modulo]

  const {
    props: {
      children: {
        props: {
          src: url
        }
      }
    }
  } = nextImg;


  useEffect(() => {
    console.log('C VALUE IS_', counter)
    console.log("modulo division_", modulo)
    setCurrImg(url)
  }, [counter])

  function changePic(e, fpics) {
    const btnName = e.target.parentElement.name
    if (btnName == "left") setCounter(c => c - 1)
    if (btnName == "right") setCounter(c => c + 1)
  }


  return (
    <>

      
      <div className={css.btnsNav} onClick={() => setGridView(c => !c)}>
      <button className={css.btnReturn} onClick={() => router.back()}><XIcon /></button>
        <ViewGridIcon />
      </div>

      <div className={css.btnsNav2}>
        <button onClick={(e) => changePic(e, "Left")} name="left">
          <ChevronLeftIcon />
        </button>
        <button onClick={(e) => changePic(e, "Right")} name="right">
          <ChevronRightIcon />
        </button>
      </div>

    <div className={css.galleryContainer} 
    >
      <Image src={currImg} layout="fill" objectFit="cover" objectPosition="top" />

      {gridView &&
        <div className={css.container}>
          <div className={css.thumbnails}>{filteredImgs}
          </div>
        </div>}
    </div>
    {/* <div className={css.bodyMeasurements}>
      {displayBodyData}
    </div> */}
    </>
  )
}
