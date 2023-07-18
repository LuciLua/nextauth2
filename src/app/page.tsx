'use client'

import { useSession } from "next-auth/react"
import styles from "./../styles/rootpage.module.scss"
import Link from "next/link"
import { FaLink, FaCheckCircle } from "react-icons/fa"
import Plans from "../components/Plans/Plans"

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
                    <h3>Seja muito bem vindo!</h3>
                </>
            )
        } else {
            return (
                <>
                    <h1>Olá,</h1>
                    <h2>
                        usuário
                    </h2>
                    <h3>
                        <Link href={'/auth/signin'}>
                            <span className={styles.icon}><FaLink /></span>
                            <span>Faça seu login antes de prosseguir</span>
                        </Link>
                    </h3>
                </>
            )
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.content_1}>
                <div className={styles.apresentation}>

                    <div className={styles.text_container}>
                        {name()}
                    </div>
                </div>
                <div className={styles.player_container}>
                    <img src="/preview.webp" alt="" />
                </div>
            </div>
            <Plans />
        </div>
    )
}