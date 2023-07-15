import styles from "./dashboard.module.scss"
import TableItem from "../../../components/TableItem/TableItem"

export default function dashboard({ params }) {

    console.log(params)

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
                   <TableItem admin date="02/12/2023" id="1" name="Item da luci" owner="LuciLua"/>
                   <TableItem admin date="02/12/2023" id="2" name="Item da luci" owner="LuciLua"/>
                </div>
            </div>

        </div>
    )
}