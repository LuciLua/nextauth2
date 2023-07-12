'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import styles from "./LoginBtn.module.scss"
import { CiLogin, CiLogout } from "react-icons/ci"


export default function LoginBtn() {

    const { data: session } = useSession()
    
    function stateLogin() {
        if (session) {
            return (
                <button onClick={() => signOut()}><CiLogout /></button>
            )
        }
        else return (
            <button onClick={() => signIn()}><CiLogin /></button>
        )
    }

    return (
        <div className={styles.btn_div}>
            {stateLogin()}
        </div>
    )
}