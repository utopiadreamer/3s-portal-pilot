'use client'
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import "./header.scss"

export default function Header() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  const handleLogout = async () => {
    signOut({ callbackUrl: `/api/auth/logout?id_toke=${session?.id_token}` })
  }

  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className={'signedInStatus'}>
        <p
          className={`nojs-show ${
            !session && loading ? 'loading' : 'loaded'
          }`}
        >
          {!session && (
            <>
              <span className={'notSignedInText'}>
                You are not signed in
              </span>
              <a
                href={`/api/auth/signin`}
                className={'buttonPrimary'}
                onClick={(e) => {
                  e.preventDefault()
                  signIn("identity-server")
                }}
              >
                Sign in
              </a>
            </>
          )}
          {session?.user && (
            <>
              <span
                style={{ backgroundImage: `url(${session.user.image})` }}
                className={'avatar'}
              />
              <span className={'signedInText'}>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email || session.user.name}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                className={'button'}
                // onClick={async (e) => {
                //    e.preventDefault()
                //   // await handleLogout()
                //   signOut()
                // }}
                onClick={(e) => {
                  e.preventDefault()
                  // signOut({ callbackUrl: `http://localhost:3000/api/auth/logout` })
                  handleLogout()
                }}
              >
                Sign out
              </a>
            </>
          )}
        </p>
      </div>
      <nav>
        <ul className={'navItems'}>
          <li className={'navItem'}>
            <Link href="/">Home</Link>
          </li>
          <li className={'navItem'}>
            <Link href="/client">Client</Link>
          </li>
          <li className={'navItem'}>
            <Link href="/server">Server</Link>
          </li>
          <li className={'navItem'}>
            <Link href="/protected">Protected</Link>
          </li>
          <li className={'navItem'}>
            <Link href="/api-example">API</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
