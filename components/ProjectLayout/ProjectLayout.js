import React from 'react'
import styles from './ProjectLayout.module.css'
import Link from 'next/link'

import { Badges, GitButton, ProjectDetailsCard } from './Utils'

export default function ProjectLayout(props) {
  return (
    <div className={styles.container}>

      <div className={styles.lateralLeft}>
        <Link href="/">
          <div className={styles.homeButton}>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-alt-circle-left" class="svg-inline--fa fa-arrow-alt-circle-left fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm116-292H256v-70.9c0-10.7-13-16.1-20.5-8.5L121.2 247.5c-4.7 4.7-4.7 12.2 0 16.9l114.3 114.9c7.6 7.6 20.5 2.2 20.5-8.5V300h116c6.6 0 12-5.4 12-12v-64c0-6.6-5.4-12-12-12z"></path></svg>
          </div>
        </Link>

        <h1 className={styles.title}>{props.title}</h1>

        <GitButton />

        <p>{props.description}</p>

        <div className={styles.usedTech}>
          <h2>Tecnologias usadas:</h2>
          <Badges name="react" />
        </div>
      </div>

      <div className={styles.lateralRight}>
        <ProjectDetailsCard />
        <ProjectDetailsCard />
        <ProjectDetailsCard />
        <ProjectDetailsCard />
      </div>

    </div>
  )
}
