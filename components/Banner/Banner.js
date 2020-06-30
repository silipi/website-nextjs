import React from 'react'
import styles from './Banner.module.css';

export default function Banner() {
  return (
    <div className={styles.container}>
      <h1 className={styles.hello}>Hello world.</h1>
      <h3 className={styles.title}>Sou o Gabriel Silipi, um analista de testes/QA curioso para aprender novas tecnologias.</h3>
      <p className={styles.description}>E este é um site que criei com o intuito de demonstrar meu trabalho, meus projetos e algumas coisas que gosto.<br />
      Espero que goste!
      </p>
    </div>
  )
}
