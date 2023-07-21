'use client'

import styles from "./Signin.module.scss"
import { CgClose, CgGoogle } from "react-icons/cg"
import { FaGithub } from "react-icons/fa"
import { signIn, useSession } from "next-auth/react"
import { useState, useEffect } from "react"
import { redirect } from "next/navigation"
import { Content } from "next/font/google"

function Modal_SignIn({ setOpenModalSignin }) {

    const { data: session, status } = useSession()
    const [state, setState] = useState<string>("")

    function keyUpHandler(event) {
        if (event.keyCode === 27) {
            setOpenModalSignin(false);
        }
    }

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
        const convertUserToUsername = (value: string) => value.replace(/ /g, "").toLowerCase();
        const username = convertUserToUsername(session.user.name)
        redirect(`/u/${username}/profile`)
    }

    else {
        return (
            <div className={styles.container}
                onMouseMoveCapture={() => { document.querySelector('input').focus() }}
                onKeyDownCapture={(key) => { keyUpHandler(key) }}>
                <div className={styles.modal}>
                    <div className={styles.close}>
                        < CgClose onClick={() => { setOpenModalSignin(false) }} />
                    </div>
                    <div className={styles.content}>
                        <h1>Sign in</h1>
                        <form action="#">
                            <label htmlFor="email">
                                E-mail
                            </label>
                            <input type="email" name="email" id="email" />
                            <div className={styles.social_btns}>
                                <button>Entrar com Email</button>
                                <div className={styles.div} />
                                <button onClick={() => signIn('google')}><span><CgGoogle /></span> Entrar com Google</button>
                                <button onClick={() => signIn('github')}><span><FaGithub /></span> Entrar com Github</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default Modal_SignIn