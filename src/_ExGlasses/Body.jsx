import React from 'react'
import ListItem from './ListItem'
import TableGlasses from './TableGlasses'

export default function Body({glasses, onChangeGlasses}) {
  return (
    <div className='container' width= "70%">
        <ListItem glasses={glasses}/>
        <TableGlasses onChangeGlasses={onChangeGlasses} />
    </div>
  )
}
