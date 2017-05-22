// ui/components/App/Header.js
import React, { Component } from 'react'
import styles from './Header.scss'

export default class Header extends Component {
  render() {
    return (
      <header className={styles['header']}>
        <nav>
          <a href='/' className={styles['brand']}>
            Babel Coder Wiki!
          </a>
          <ul className={styles['menu']}>
            <li className={styles['menu__item']}>
              <a href='/pages' className={styles['menu__link']}>
                All Pages
              </a>
            </li>
            <li className={styles['menu__item']}>
              <a
                href='#'
                className={styles['menu__link']}>
                About us
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}