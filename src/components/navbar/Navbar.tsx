import styles from '@app/page.module.scss'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <span className={styles.logo}>Dev</span>
      <span className={styles.logo}>Life</span>
    </div>
  )
}
