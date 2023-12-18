import { signIn } from "next-auth/react"
import styles from "../../layout/header.module.css"

export default function Unauthorized() {
  return (
    <>
      <h1>Unauthorized</h1>
      <p>
        {/* <a href="/api/auth/signin"
           onClick={(e) => {
           e.preventDefault()
           signIn()
        }}>You must be signed in to view this page</a> */}
        You must be signed in to view this page
      </p>
      <a
        href={`/api/auth/signin`}
        className={styles.buttonPrimary}
        onClick={(e) => {
          e.preventDefault()
          signIn("identity-server")
        }}
      >
        Sign in
      </a>
    </>
  )
}
