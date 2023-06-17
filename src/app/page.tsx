import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.description}>
        Welcome
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/hero_image.svg"
          alt="Placeholder"
          width={600}
          height={400}
          priority
        />
      </div>

    </main>
  )
}
