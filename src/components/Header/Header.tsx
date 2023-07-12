import LoginBtn from "../LoginBtn/LoginBtn"
import styles from "./Header.module.scss"

function Header() {

    return (
        <div className={styles.container}>
            <header className={styles.content}>
                <ul className={styles.left_menu}>
                    <li><h1>Logo</h1></li>
                    <li>menu1</li>
                    <li>menu2</li>
                    <li>menu3</li>
                </ul>
                <ul className={styles.right_menu}>
                    <li>
                        <LoginBtn />
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Header