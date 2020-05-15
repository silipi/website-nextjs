import React from 'react'
import ProjectLayout from '../../components/ProjectLayout/ProjectLayout'

export default function Blog() {
  return (
    <ProjectLayout
      title="Gatsby blog."
      repoURL="gatsby-blog"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dicta molestias quos at officia consequuntur, officiis vel modi voluptas accusantium et culpa cum nobis quam. Cum voluptate dicta quaerat excepturi?"
      badges={["js", "react", "gatsby", "nodejs"]}
      cardImage={["my-blog/img1.png", "my-blog/img3.png", "my-blog/img4.png", "my-blog/img5.png"]}
      cardText={["Layout principal, em Dark.", "Layout dos posts. Para escrevê-los, usa-se o CMS do Netlify.", "Layout principal, em White.", "Search Bar implementada, usando o plugin Algolia, super recomendo."]}
    />
  )
}
