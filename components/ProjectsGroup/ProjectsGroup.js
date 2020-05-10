import React from 'react'
import styles from './ProjectsGroup.module.css'

import ProjectCard from './ProjectCard'

export default function ProjectsGroup() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Meus projetos:</h2>
      <div className={styles.projectsContainer}>
        {/*
          ProjectCard props: 
            title=string, 
            image='imgname.png' (inside ./public/images/projects/'imgname.png')
            description=string
        */}
        <ProjectCard nameURL="my-blog" />
        <ProjectCard nameURL="vuejs" />
        <ProjectCard nameURL="react" />
        <ProjectCard nameURL="node.js" />
        <ProjectCard nameURL="teste" />
        <ProjectCard nameURL="amoogabriel" />
      </div>
    </div>
  )
}
