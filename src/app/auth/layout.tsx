import styles from "./authlayout.module.scss"

export default function authLayout({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

