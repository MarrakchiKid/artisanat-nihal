'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/header.module.css'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div>
        <span className={styles.siteName}>Artisanat Marocain</span>
      </div>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <Link href="/">Accueil</Link>
        <Link href="/produits">Catalogue</Link>
        <Link href="/propos">À propos</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <button
        className={styles.burger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Ouvrir le menu"
      >
        ☰
      </button>
    </header>
  )
}
