'use client'
import styles from "./contas.module.scss"
import TableItem from "../../../../components/TableItem/TableItem"

export default function contas() {



    const users = JSON.parse(localStorage.getItem('users'))



    return (
        <div className={styles.container}>
            <h1>📝 Gerenciamento de Contas</h1>
            <div className={styles.contas}>
                {users.map(user => {
                    return (
                        <TableItem admin date={user.date} name={user.name} owner={user.name} email={user.email} image={user.image} />
                    )
                })}
            </div>
        </div>
    )
}