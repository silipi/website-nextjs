import React, { Component } from 'react'
import styles from './ProjectLayout.module.css'
import Link from 'next/link'

import { Badges, GitButton, ProjectDetailsCard, Modal } from './Utils'

class ProjectLayout extends Component {
  state = { show: false }



  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };



  render() {
    console.log(this.badge)
    return (
      <div className={styles.container}>

        <Modal show={this.state.show} handleClose={this.hideModal}>

        </Modal>

        <div className={styles.lateralLeft}>
          <Link href="/">
            <div className={styles.homeButton}>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-alt-circle-left" class="svg-inline--fa fa-arrow-alt-circle-left fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm116-292H256v-70.9c0-10.7-13-16.1-20.5-8.5L121.2 247.5c-4.7 4.7-4.7 12.2 0 16.9l114.3 114.9c7.6 7.6 20.5 2.2 20.5-8.5V300h116c6.6 0 12-5.4 12-12v-64c0-6.6-5.4-12-12-12z"></path></svg>
            </div>
          </Link>

          <h1 className={styles.title}>{this.props.title}</h1>

          <GitButton />

          <p>{this.props.description}</p>

          <div className={styles.usedTech}>
            <h2>Tecnologias usadas:</h2>
            {this.props.badge.map(badge => {
              return <Badges name={badge} />
            })}
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
}

export default ProjectLayout
