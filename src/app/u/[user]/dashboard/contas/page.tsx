'use client'
import TableItem from "../../../../../components/TableItem/TableItem"
import User from "../../../../types/User"
import styles from "./contas.module.scss"

export default function contas() {
    const users = JSON.parse(localStorage.getItem('users'))
    return (
        <div className={styles.container}>
            <h1>📝 Gerenciamento de Contas</h1>
            <div className={styles.contas}>
                {users.map((user: User) => {
                    return (
                        <TableItem
                            admin
                            date={user.date}
                            name={user.name}
                            owner={user.name}
                            email={user.email}
                            image={user.image}
                            id={user.date}
                            />
                    )
                })}
            </div>
        </div>
    )
}