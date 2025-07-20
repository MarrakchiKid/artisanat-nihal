'use client'

import Link from 'next/link'
import styles from '../styles/header.module.css'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.navcontainer}>
        <a href="/" className={styles.logo} id="logo-text">Artisan Nihal</a>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        <ul className={`${styles.navlinks} ${menuOpen ? styles.showMenu : ''}`}>
          <li><Link href="/catalogue">Catalogue</Link></li>
          <li><Link href="/about">À propos</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/contact" className={styles.navcta}>Demander un devis</Link></li>
        </ul>
      </div>
    </nav>
  )
}
