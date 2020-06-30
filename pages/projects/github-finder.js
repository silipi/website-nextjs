import React from 'react'
import ProjectLayout from '../../components/ProjectLayout/ProjectLayout'

export default function GithubFinder() {
  return (
    <ProjectLayout
      title="Github Finder"
      repoURL="github-finder"
      description={<>Um aplicativo criado para realizar consultas à API do Github e encontrar usuários pelo nome ou por alguma informação que contenha na bio.<br/>
      Este projeto é bem simples, não há nada demais nele por enquanto, mas serve como apoio para entender o funcionamento de requests à uma API, os dados, chaves de acesso e treinar um pouco mais.<br/>
      Este projeto também é de um curso, mas falarei sobre ele futuramente.</>}
      badges={["js", "react"]}
      cardImage={["github-finder/1.png", "github-finder/2.png", "github-finder/3.png"]}
      cardText={["Layout principal.", "Usuários aparecendo após a pesquisa pelo termo 'silipi'", "Validação ao tentar enviar um usuário vazio, sem texto."]}
    />
  )
}
