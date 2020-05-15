import styles from './Navbar.module.css';
import Link from 'next/link';

import React, { Component } from 'react'

export default class Navbar extends Component {

  render() {

    return (
      <>
        <nav className={styles.navbar}>
          <ul className={styles.navbar_nav}>

            <li className={styles.logo}>
              <Link href="/">
                <a className={styles.nav_link}>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fad"
                    data-icon="angle-double-right"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
                  >
                    <g class="fa-group">
                      <path
                        fill="currentColor"
                        d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                        className="fa-secondary"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                        className="fa-primary"
                      ></path>
                    </g>
                  </svg>
                  <span className={`${styles.logo_text} ${styles.link_text}`}>Silipi</span>
                </a>
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link href="/">
                <a className={styles.nav_link}>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tasks" class="svg-inline--fa fa-tasks fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" className={styles.fa_primary} d="M139.61 35.5a12 12 0 0 0-17 0L58.93 98.81l-22.7-22.12a12 12 0 0 0-17 0L3.53 92.41a12 12 0 0 0 0 17l47.59 47.4a12.78 12.78 0 0 0 17.61 0l15.59-15.62L156.52 69a12.09 12.09 0 0 0 .09-17zm0 159.19a12 12 0 0 0-17 0l-63.68 63.72-22.7-22.1a12 12 0 0 0-17 0L3.53 252a12 12 0 0 0 0 17L51 316.5a12.77 12.77 0 0 0 17.6 0l15.7-15.69 72.2-72.22a12 12 0 0 0 .09-16.9zM64 368c-26.49 0-48.59 21.5-48.59 48S37.53 464 64 464a48 48 0 0 0 0-96zm432 16H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path></svg>
                  <span className={`${styles.link_text_delay} ${styles.link_text}`}>Projects</span>
                </a>
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link href="/about">
                <a className={styles.nav_link}>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="address-card" class="svg-inline--fa fa-address-card fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"></path></svg>
                  <span className={`${styles.link_text_delay} ${styles.link_text}`}>About</span>
                </a>
              </Link>
            </li>

          </ul>
        </nav>
      </>
    )
  }
}
