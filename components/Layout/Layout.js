import React from 'react'
import styles from './Layout.module.css'
import Navbar from '../Navbar/Navbar'



export default function Layout(props) {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.main}>
        {props.children}
      </div>
    </div>
  )
}
