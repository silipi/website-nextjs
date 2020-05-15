import React from 'react'
import styles from './ProjectsGroup.module.css'
import Link from 'next/link'

export default function ProjectCard(props) {
  return (

    <Link href={props.nameURL ? `/projects/${props.nameURL}` : "/"}>
      <div className={styles.cardContainer}>
        <img src={props.image ? `./images/projects/${props.image}` : `./images/placeholder/card-placeholder.png`} className={styles.cardImage} />
        <div className={styles.cardDetails}>
          <h3 className={styles.cardTitle}>{props.title ? props.title : "Título do projeto"}</h3>
          <p className={styles.cardDescription}>
            {props.description ? props.description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, architecto velit beatae atque nisi, pariatur accusantium explicabo doloribus."}
          </p>
        </div>
      </div>
    </Link>

  )
}
