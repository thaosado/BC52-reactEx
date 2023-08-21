import React from 'react'
import CardItem from './CardItem'

export default function ListItem({glasses}) {
  return (
    <div>
        <div className='d-flex justify-content-around px-5' style={{paddingTop: "100px"}}>
        <CardItem glasses={glasses} />
        <img src="./img/model.jpg" alt="" width= "auto" height= "300px" />
        </div>
    </div>
  )
}
