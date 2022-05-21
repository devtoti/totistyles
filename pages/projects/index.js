import React from 'react'
import Card from '../../components/Card'

import pic01 from '../../public/gallery/newicon-02.jpg'
import pic02 from '../../public/gallery/homegym-02.jpg'
import pic03 from '../../public/gallery/collection-01.jpg'

const cardCovers = [
  { title: "agency", description:"under construction", src: pic01, type: "commercial", keyword:"newicon" },
  { title: "homegym", description:"under construction", src: pic02, type: "fitness", keyword:"homegym" },
  { title: "collection", description:"spring photoshoot", src: pic03, type: "editorial", keyword:"collection" },
  { title: "collection", description:"spring photoshoot", src: pic03, type: "editorial", keyword:"collection" },

]


export default function Projects() {
  return (
    <div className="projects" >
      <h3 maintitle="true">Projects</h3>
      {cardCovers.map((card, id) => {
      return <Card 
      key={id} src={card.src}
      title={card.title}
      description={card.description}
      type={card.type}
      id={id}
      keyword={card.keyword}/>
      })}
    </div>
  )
}
