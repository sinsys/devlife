import Link from 'next/link'
import Image from 'next/image'

import styles from '@app/page.module.scss'

const links = [
  {
    id: 1,
    title: 'Dashboard',
    route: '/dashboard'
  },
  {
    id: 2,
    title: 'Contact',
    route: '/contact'
  },
  {
    id: 3,
    title: 'Portfolio',
    route: '/portfolio'
  },
  {
    id: 4,
    title: 'About',
    route: '/about'
  }
]
export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image src="/d.svg" width={36} height={36} alt="D" />
        <span>ev</span>
        <span>Life</span>
      </Link>
      <nav className={styles.navigation}>
        {links.map(link => (
          <Link key={link.id} href={link.route}>
            {link.title}
          </Link>
        ))}
      </nav>
    </header>
  )
}
