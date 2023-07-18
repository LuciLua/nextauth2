'use client'

import { useSession } from "next-auth/react"
import styles from "./layoutUser.module.scss"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"

export default function layoutUser({ children }) {

    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/auth/signin')
        }
    })

    const [state, setState] = useState<string>("")

    useEffect(() => {
        setState(status)
    }, [status])


    return (state === "authenticated") ? (
        <div className={styles.container}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
        :
        <p>need login</p>
}
