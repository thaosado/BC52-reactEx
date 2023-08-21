import React from 'react'
import GlassesItem from './GlassesItem'


export default function TableGlasses({onChangeGlasses}) {
  return (
    <div className=' m-5 px-5 py-4 bg-white'>
      <GlassesItem onChangeGlasses={onChangeGlasses} />
    </div>
    
  )
}
