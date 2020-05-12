import React from 'react'
import ProjectLayout from '../../components/ProjectLayout/ProjectLayout'
import { Badges } from '../../components/ProjectLayout/Utils'

export default function Blog() {
  return (
    <ProjectLayout
      title="Gatsby blog."
      repoURL="gatsby-blog"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dicta molestias quos at officia consequuntur, officiis vel modi voluptas accusantium et culpa cum nobis quam. Cum voluptate dicta quaerat excepturi?"
      badge={["js", "react", "gatsby", "nodejs"]}

    />
  )
}
