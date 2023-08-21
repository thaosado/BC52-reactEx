import React from 'react'

export default function CardItem({ glasses }) {
  return glasses.map((glasses) => {
    return (
      <div key={glasses.id} className='position-relative'>
        <img src="./img/model.jpg" alt="model" width="auto" height="300px" />
        <div style={
          { position: 'absolute', top: "75px", left: "22%", opacity: 0.5, width: "137px", height: "45px", textAlign: "center" }}>
          <img width="auto" height="45px" src={glasses.url} alt={glasses.id} />
        </div>
        <div className='px-1 pt-1' style={{ width: "100%", position: 'absolute', bottom: 0, backgroundColor: "rgb(245 124 0 / 45%)" }}>
          <h6 className='text-primary'>{glasses.name}</h6>
          <p style={{ fontSize: "12px", color: "white", fontWeight: 600 }}>{glasses.desc}</p>
        </div>
      </div>
    )
  })


}