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
        <ProjectCard nameURL="my-blog" title="Gatsby Blog" image="my-blog.png" description="Um blog criado como projeto de um curso realizado pela Udemy." />
        <ProjectCard nameURL='github-finder' title='Github Finder' image="github-finder.png" description='Um aplicativo para encontrar usuários do Github.'/>
        <ProjectCard />
      </div>
    </div>
  )
}
