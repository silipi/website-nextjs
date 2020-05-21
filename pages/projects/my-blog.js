import React from 'react'
import ProjectLayout from '../../components/ProjectLayout/ProjectLayout'

export default function Blog() {
  return (
    <ProjectLayout
      title="Gatsby blog."
      repoURL="gatsby-blog"
      description={<>Um blog criado com Gatsby para treinar a tecnologia, juntamente com GraphQL. Este projeto é provido de um curso realizado na Udemy, porém, personalizado. Segue o <a target="_blank" href="https://www.udemy.com/course/gatsby-crie-um-site-pwa-com-react-graphql-e-netlify-cms/">link para o curso</a> do Willian Justen de Vasconcellos, super recomendo. <br /><br /> Eu não pretendo continuar utilizando ele por enquanto, pela dificuldade de manter postando, mas quem sabe um dia, não é mesmo?</>}
      badges={["js", "react", "gatsby", "nodejs"]}
      cardImage={["my-blog/img1.png", "my-blog/img3.png", "my-blog/img4.png", "my-blog/img5.png"]}
      cardText={["Layout principal, em Dark.", "Layout dos posts. Para escrevê-los, usa-se o CMS do Netlify.", "Layout principal, em White.", "Search Bar implementada, usando o plugin Algolia, um ótimo plugin."]}
    />
  )
}
