import React from "react"
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; Nick Burczyk, {new Date().getFullYear()}</p>
      <p>View repo on&nbsp;
        <a href="https://github.com/nickburczyk/Freelance-Timeline">Github</a>
      </p>
    </footer>
  )
}

export default Footer


interface Props {
  // no props needed
}