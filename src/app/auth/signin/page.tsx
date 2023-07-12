'use client'

import { signIn, useSession } from "next-auth/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { BiLogoGithub, BiLogoGoogle } from "react-icons/bi"
import { BiArrowBack } from "react-icons/bi"
import styles from "./signin.module.scss"

import { redirect } from "next/navigation"

export default function signin() {



    const { data: session, status } = useSession()

    const [state, setState] = useState<string>("")

    useEffect(() => {
        setState(status)
    }, [status])


    if (state === "loading") {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    if (state === "authenticated") {
        redirect('/')
    }
    else {
        return (
            <>
                <div className={styles.btnCollection}>
                    <h1>⚒️ Admin</h1>
                    <h2>Faça seu login antes de prosseguir</h2>
                    <button onClick={() => signIn('github')}>
                        <span className={styles.icon}><BiLogoGithub /></span>
                        <span className={styles.label}>Login com GitHub</span>
                    </button>
                    <button onClick={() => signIn('google')}>
                        <span className={styles.icon}><BiLogoGoogle /></span>
                        <span className={styles.label}>Login com Google</span>
                    </button>
                    <button>
                        <Link href={'/'}>
                            <span className={styles.icon}><BiArrowBack /></span>
                            <span className={styles.label}>Voltar</span>
                        </Link>
                    </button>
                </div>
            </>
        )
    }
}