'use client'

import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import styles from "./Header.module.scss"

import { CiLogin, CiLogout, CiUser, CiGrid2H, CiHome } from "react-icons/ci"
import { useEffect, useRef, useState } from "react"


function Header() {

    const { data: session } = useSession()

    const [menuOpen, setMenuOpen] = useState<Boolean>(false)
    const modal_menu_account = useRef<HTMLDivElement>(null)

    function profilePhotoLoad() { return <img src={`${session?.user?.image}`} /> }

    function STYLE_closeOrOpenModalAccount() {
        const removeStyleByClassList = (styleName: string) => { modal_menu_account.current.classList.remove(`${styleName}`) }
        const addStyleByClassList = (styleName: string) => { modal_menu_account.current.classList.add(`${styleName}`) }
        const removeAndAdd = (r: string, a: string) => { removeStyleByClassList(r), addStyleByClassList(a) }
        if (session) { menuOpen ? removeAndAdd(styles.closed, styles.opened) : removeAndAdd(styles.opened, styles.closed) }
    }

    function ACTION_invoke_menu_account() { menuOpen ? setMenuOpen(false) : setMenuOpen(true); return null }

    function CREATE_menuItens_account_open() {
        const convertUserToUsername = (value: string) => value.replace(/ /g, "").toLowerCase();
        const username = convertUserToUsername(session.user.name)
        const ItemMenu = (type: 'btn' | 'a', icon: any, label: string, action: any, classname?: any, href?: string) => {
            switch (type) {
                case 'a': return (<Link onClick={action} href={href}>{icon} {label} </Link>);
                case 'btn': return (<button onClick={action} className={classname}>{icon} {label}</button>)
            }
        }

        return (<>
            {ItemMenu("a", <CiHome />, 'Homepage', () => { ACTION_invoke_menu_account() }, null, '/')}
            {ItemMenu("a", <CiUser />, 'Perfil', () => { ACTION_invoke_menu_account() }, null, `/${username}`)}
            {ItemMenu("a", <CiGrid2H />, 'Dashboard', () => { ACTION_invoke_menu_account() }, null, `/${username}/dashboard`)}
            {ItemMenu("btn", <CiLogout />, 'Sair', () => { signOut() }, `${styles.signout}`)}
        </>)
    }

    useEffect(() => {
        STYLE_closeOrOpenModalAccount()
    }, [menuOpen])

    return (
        <div className={styles.container}>
            <header className={styles.content}>
                <ul className={styles.left_menu}>
                    <li><Link href={'/'}><h1>maklip</h1></Link></li>
                </ul>
                <ul className={styles.right_menu}>
                    {session ?
                        <>
                            <li><button
                                className={styles.invoke_menu_account}
                                onClick={() => ACTION_invoke_menu_account()}>
                                {profilePhotoLoad()}
                            </button></li>
                            <div
                                ref={modal_menu_account}
                                className={styles.modal_menu_account}>
                                {CREATE_menuItens_account_open()}
                            </div>
                        </>
                        :
                        <li><button
                            className={styles.signin}
                            onClick={() => signIn()}>
                            <CiLogin /> SignIn
                        </button></li>
                    }
                </ul>
            </header>
        </div>
    )
}

export default Header