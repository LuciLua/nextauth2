'use client'

import { signIn, useSession } from "next-auth/react"
import styles from "./../styles/rootpage.module.scss"

export default function RootPage() {

    const { data: session } = useSession()

    function name() {
        if (session) {
            return (
                <>
                    <h1>Olá,</h1>
                    <h2>
                        {session?.user?.name} 🔥
                    </h2>
                    <h3>Welcome!</h3>
                </>
            )
        } else {
            return (
                <>
                    <h1>Olá,</h1>
                    <h2>
                        usuário
                    </h2>
                    <h3>Faça seu login antes de prosseguir</h3>
                    <button onClick={() => signIn()}>Login</button>
                </>
            )
        }
    }

    return (
        <div className={styles.container}>
            {name()}
        </div>
    )
}