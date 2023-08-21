import React from 'react'

const icons = [
  {
    id: "1",
    url: "./img/g1.jpg",
  },
  {
    id: "2",
    url: "./img/g2.jpg",
  },
  {
    id: "3",
    url: "./img/g3.jpg",
  },
  {
    id: "4",
    url: "./img/g4.jpg",
  },
  {
    id: "5",
    url: "./img/g5.jpg",
  },
  {
    id: "6",
    url: "./img/g6.jpg",
  },
  {
    id: "7",
    url: "./img/g7.jpg",
  },
  {
    id: "8",
    url: "./img/g8.jpg",
  },
  {
    id: "9",
    url: "./img/g9.jpg",
  }
]

export default function GlassesItem({onChangeGlasses}) {
  return icons.map((icon) => {
    return (
      <a onClick={() => {onChangeGlasses(icon.id)}} key={icon.id} className='p-3 border border-black m-2 mb-2'style={{cursor: "pointer", display: 'inline-block'}}>
        <img src={icon.url} alt={icon.id} width="100px" height="40px"/>
      </a>
    )
  })
}
