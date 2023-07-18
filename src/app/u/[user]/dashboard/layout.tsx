import Link from "next/link"
import { CgHomeAlt, CgNotes, CgUserList } from "react-icons/cg"
import styles from "./rootdashboard.module.scss"

export default function layoutDashboard({ children, params }) {

    const { user } = params

    return (
        <div className={styles.container}>
            <header className={styles.header_container}>
                <ul>
                    <li>
                        <Link href={`/u/${user}/dashboard`}

                        >
                            <span className={styles.icon}><CgHomeAlt /></span>
                            <span className={styles.label}>Inicial</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/u/${user}/dashboard/itens`}>
                            <span className={styles.icon}><CgNotes /></span>
                            <span className={styles.label}>Meus itens</span>
                        </Link>

                    </li>
                    <li>
                        <Link href={`/u/${user}/dashboard/contas`}>
                            <span className={styles.icon}><CgUserList /></span>
                            <span className={styles.label}>Contas</span>
                        </Link>

                    </li>
                </ul>
            </header>
            <div className={styles.dashboard}>
                {children}
            </div>
        </div>
    )
}