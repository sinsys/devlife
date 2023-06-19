import styles from '@app/page.module.scss'
const getYear = new Date().getFullYear()
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Nicholas Hazel &copy; {getYear}</p>
    </footer>
  )
}
