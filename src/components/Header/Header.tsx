'use client'

import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import styles from "./Header.module.scss"

import { CiLogin, CiLogout, CiUser, CiGrid2H, CiHome } from "react-icons/ci"
import { MouseEvent, useEffect, useRef, useState } from "react"


function Header() {

    const { data: session } = useSession()

    const [menuOpen, setMenuOpen] = useState<Boolean>(false)
    const modal_menu_account = useRef<HTMLDivElement>(null)

    function closeOrOpenModalAccount(){
        const removeStyleByClassList = (styleName: string) => { modal_menu_account.current.classList.remove(`${styleName}`) }
        const addStyleByClassList = (styleName: string) => { modal_menu_account.current.classList.add(`${styleName}`) }
        const removeAndAdd = (r: string, a: string) => { removeStyleByClassList(r), addStyleByClassList(a) }
        if (session) { menuOpen ? removeAndAdd(styles.closed, styles.opened) : removeAndAdd(styles.opened, styles.closed) }
    }

    function invoke_menu_account(event: MouseEvent) {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true)
    }

    function profilePhoto() { return <img src={`${session.user.image}`} /> }

    function menuItens_account_open() {
        const convertToUsername = (value: string) => value.split(" ").toString().toLowerCase().replace(",", "")
        if (session) {
            return (
                <>
                    <Link href={'/'}><CiHome />Homepage</Link>
                    <Link href={`/${convertToUsername(session.user.name)}`}><CiUser /> Perfil</Link>
                    <Link href={`/${convertToUsername(session.user.name)}/dashboard`}> <CiGrid2H />Dashboard</Link>
                    <button className={styles.signout} onClick={() => signOut()}> <CiLogout />Sair </button>
                </>
            )
        }
    }

    useEffect(() => {
        closeOrOpenModalAccount()
    }, [menuOpen])


    return (
        <div className={styles.container}>
            <header className={styles.content}>
                <ul className={styles.left_menu}>
                    <li><Link href={'/'}><h1>Logo</h1></Link></li>
                </ul>
                <ul className={styles.right_menu}>
                    {session ?
                        <>
                            <li>
                                <button className={styles.invoke_menu_account} onClick={(event: MouseEvent) => invoke_menu_account(event)}>
                                    {profilePhoto()}
                                </button>
                            </li>
                            <div ref={modal_menu_account} className={styles.modal_menu_account}>
                                {menuItens_account_open()}
                            </div>
                        </>
                        :
                        <li>
                            <button className={styles.signin} onClick={() => { signIn() }}>
                                <CiLogin /> SignIn
                            </button>
                        </li>
                    }
                </ul>
            </header>
        </div>
    )
}

export default Header