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


    async function setUserLocal() {
        const usersArray = await JSON.parse(localStorage.getItem('users')) || []; // Verifica se há um array salvo no localStorage ou cria um novo array vazio
        const emailToCheck = session?.user?.email;

        // Verifica se o email já existe no array
        const emailExists = await usersArray.some((user: any) => user?.email === emailToCheck);

        const dataAtual = new Date();

        // Obtém os componentes da data
        const dia = dataAtual.getDate();
        const mes = dataAtual.getMonth() + 1; // Os meses são indexados de 0 a 11, então adicionamos 1
        const ano = dataAtual.getFullYear();
        const hora = dataAtual.getHours();
        const minuto = dataAtual.getMinutes();


        // Formata a data e hora
        const dataFormatada = `${dia}/${mes}/${ano} às ${hora}:${minuto}`;

        if (!emailExists) {
            const user_formated = {
                name: session?.user?.name,
                email: session?.user?.email,
                image: session?.user?.image,
                date: dataFormatada
            };

            if (status === "authenticated") {
                usersArray.push(user_formated);
                console.log(usersArray)

                if (usersArray.length > 0) {
                    localStorage.setItem('users', JSON.stringify(usersArray));
                    console.log('Usuário adicionado com sucesso.');
                } else {
                    null
                }
            } else {
                null
            }


        } else {
            console.log('O email já está cadastrado. Nenhum usuário foi adicionado.');
        }

    }

    useEffect(() => {
        setState(status)
        setUserLocal()
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