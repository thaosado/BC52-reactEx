import React from 'react'
import styles from './styles.module.scss'
import Content from './Content';
import data from "./data.json";

export default function MovieTickets() {
  return (
    <div className={styles.background}>
        <h1 className={styles.title}>MOVIE SEAT SELECTION</h1>
        <Content data={data} />
    </div>
  )
}
