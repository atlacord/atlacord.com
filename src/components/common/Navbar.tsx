'use client';
import { useState } from 'react';
import styles from './styles/Navbar.module.css';
import DraftBanner from './DraftBanner';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Meet The Team' },
  { href: '/#events', label: 'Events' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <a href="#home" className={styles.logo}>
        <span className={styles.logoIcon}></span>
        <span className={styles.logoAccent}>ATLAcord</span>
      </a>

      <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="Menu">
        <span className={open ? styles.lineOpen : ''} />
        <span className={open ? styles.lineOpen : ''} />
        <span className={open ? styles.lineOpen : ''} />
      </button>

      <DraftBanner />;
      <ul className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className={styles.link} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a href="https://discord.gg/avatar" className={styles.cta} onClick={() => setOpen(false)}>
            Join
          </a>
        </li>
      </ul>
    </nav>
  );
}