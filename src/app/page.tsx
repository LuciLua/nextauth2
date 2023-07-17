'use client'

import { useSession } from "next-auth/react"
import styles from "./../styles/rootpage.module.scss"
import Link from "next/link"
import { FaLink, FaCheckCircle } from "react-icons/fa"

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
            <div className={styles.content_2}>

                <div className={styles.plans}>
                    <div className={styles.plan}>
                        <h1>Basico</h1>
                        <p>description here description here description.</p>
                        <ul>
                            <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                            <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                            <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                        </ul>
                        <h2>R$1200<span>/dia</span></h2>
                        <button>Escolher</button>
                    </div>
                    <div className={styles.plan}>
                        <h1>Padrão</h1>
                        <p>description here description here description.</p>
                        <ul>
                            <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                            <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                            <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                            <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                            <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                        </ul>
                        <h2>R$2250<span>/dia</span></h2>
                        <button>Escolher</button>
                    </div>
                    <div className={styles.plan}>
                        <h1>Master</h1>
                        <p>description here description here description.</p>
                        <ul>
                            <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                            <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                            <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                            <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                            <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                            <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                            <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                        </ul>
                        <h2>R$3000<span>/dia</span></h2>
                        <button>Escolher</button>
                    </div>

                </div>

            </div>
        </div>
    )
}