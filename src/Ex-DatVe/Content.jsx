import React from 'react'
import RequiredDetails from './RequiredDetails'
import SeatList from './SeatList'
import styles from "./styles.module.scss"

export default function Content({data}) {
  return (
    <div className={styles.content}>
        <RequiredDetails />
        <SeatList data={data} />
    </div>
  )
}
