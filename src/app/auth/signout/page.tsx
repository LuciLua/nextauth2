'use client'

import { signIn } from "next-auth/react"
import Link from "next/link"
import { BiLogoGithub, BiLogoGoogle } from "react-icons/bi"
import { BiArrowBack } from "react-icons/bi"
import styles from "./signout.module.scss"

export default function signout() {
    return (
        <div className={styles.container}>
            <h1>
                👋 Você saiu! Até a próxima!
            </h1>
        </div>
    )
}