import styles from "./dashboard.module.scss"
import { CgHomeAlt, CgNotes, CgUserList } from "react-icons/cg"

export default function dashboard({ params }) {
    return (

        <div className={styles.container}>

            <div className={styles.elements_dashboard}>
                <div className={styles.element}>
                    <h1>Items</h1>
                    <h2>3</h2>
                </div>
                <div className={styles.element}>
                    <h1>Contas</h1>
                    <h2>2</h2>
                </div>
            </div>

            <div className={styles.itens_relation}>
                <h1>
                    relacao itens e contas
                </h1>

                <div className={styles.itens_collection}>
                    <div className={styles.line}>
                        <div>Nome do Item</div>
                        <div>Conta</div>
                        <div>Data</div>
                    </div>
                    <div className={styles.line}>
                        <div>algum nome</div>
                        <div>Luci4Dev</div>
                        <div>23/10/2022</div>
                    </div>
                    <div className={styles.line}>
                        <div>algum nome</div>
                        <div>LuciLua</div>
                        <div>05/02/2021</div>
                    </div>
                    <div className={styles.line}>
                        <div>algum nome</div>
                        <div>LuciLua</div>
                        <div>14/06/2023</div>
                    </div>
                </div>
            </div>

        </div>
    )
}