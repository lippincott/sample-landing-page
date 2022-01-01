import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made by <img src="/favicon-32x32.png" alt="Market Action Research logo" className={styles.logo} /> for you
      </footer>
    </>
  )
}
