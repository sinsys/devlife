import Image from 'next/image'
import styles from '@app/page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.description}>
        <span className={styles.logo}>Dev</span>
        <span className={styles.logo}>Life</span>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/comp_life.png"
          alt="Face in computer"
          width={480}
          height={479}
          priority
        />
      </div>

    </main>
  )
}
