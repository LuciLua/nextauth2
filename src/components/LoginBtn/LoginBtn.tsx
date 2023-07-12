'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import styles from "./LoginBtn.module.scss"
import { CiLogin, CiLogout } from "react-icons/ci"
import Link from "next/link"


export default function LoginBtn() {

    const { data: session } = useSession()

    function stateLogin() {
        if (session) {
            return (
                <button onClick={() => signOut()}><CiLogout /></button>
            )
        }
        else return (
            <Link href={'/auth/signin'}>
                <button><CiLogin /></button>
            </Link>
        )
    }

    return (
        <div className={styles.btn_div}>
            {stateLogin()}
        </div>
    )
}