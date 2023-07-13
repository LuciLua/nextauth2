'use client'

import { useSession } from "next-auth/react"
import Link from "next/link"
import LoginBtn from "../LoginBtn/LoginBtn"
import styles from "./Header.module.scss"

function Header() {

    const { data: session } = useSession()

    function profilePhoto() {
        if (session) {
            return (
                <img src={`${session.user.image}`} />
            )
        }
        else {
            return (
                <>
                </>
            )
        }
    }

    function profile() {
        const convertToUsername = (value: string) => value.split(" ").toString().toLowerCase().replace(",", "")
        return session ? <li><Link href={`/${convertToUsername(session.user.name)}`}>Perfil</Link></li> : null
    }
    function dashboard() {
        const convertToUsername = (value: string) => value.split(" ").toString().toLowerCase().replace(",", "")
        return session ? <li><Link href={`/${convertToUsername(session.user.name)}/dashboard`}>Dashboard</Link></li> : null
    }


    return (
        <div className={styles.container}>
            <header className={styles.content}>
                <ul className={styles.left_menu}>
                    <li><Link href={'/'}><h1>Logo</h1></Link></li>
                    {profile()}
                    {dashboard()}
                </ul>
                <ul className={styles.right_menu}>
                    <li>
                        <LoginBtn />
                    </li>
                    <li>
                        {profilePhoto()}
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Header